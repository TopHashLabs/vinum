interface ClipboardItem {
  readonly types: string[]
  getType: (type: string) => Promise<Blob>
}
declare const ClipboardItem: {
  prototype: ClipboardItem
  new (objects: Record<string, Blob>): ClipboardItem
}
interface ModernClipboard extends Clipboard {
  read(): Promise<Array<ClipboardItem>>
  write(items: Array<ClipboardItem>): Promise<void>
}
export interface UseClipboard {
  writeClipboard(text: string): void
  readClipboard(): Promise<string>
}
export function useClipboard(): UseClipboard {
  function writeClipboard(text: string): void {
    const type = 'text/plain'
    const blob: Blob = new Blob([text], { type })
    const data: Array<ClipboardItem> = [new ClipboardItem({ [type]: blob })]
    ;(navigator.clipboard as ModernClipboard).write(data)
  }

  async function readClipboard(): Promise<string> {
    let text = ''
    const permissions = await navigator.permissions.query({
      name: 'clipboard-read' as PermissionName
    })

    if (permissions.state == 'granted' || permissions.state == 'prompt') {
      const data = await (navigator.clipboard as ModernClipboard).read()
      for (let i = 0; i < data.length; i++) {
        if (!data[i].types.includes('text/plain')) {
          console.log('Clipboard contains non-text data. Unable to access it.')
        } else {
          const blob = await data[i].getType('text/plain')
          text = await blob.text()
        }
      }
    }
    return text
  }

  return { writeClipboard, readClipboard }
}
