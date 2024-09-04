import { ActionButtonsRow, Content, DraggableTopBar, RootLayout, Sidebar } from '@/components'

const App = () => {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        {/* <Sidebar className="p-2 border-4 border-red-500 text-blue-500">Sidebar</Sidebar> */}
        <Sidebar className="p-2 bg-gray-600/50">
          <ActionButtonsRow className="flex justify-between mt-1" />
        </Sidebar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20">Content</Content>
      </RootLayout>
    </>
  )
}

export default App
