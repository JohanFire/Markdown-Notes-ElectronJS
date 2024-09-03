import { Content, RootLayout, Sidebar } from '@/components'

function App() {
  return (
    <RootLayout>
      <Sidebar className="p-2 border-4 border-red-500 text-blue-500">Sidebar</Sidebar>
      <Content className="p-2 border-4 border-blue-500 text-blue-500">Content</Content>
    </RootLayout>
  )
}

export default App

{
  /* <div className="flex h-full items-center justify-center">
<span className="text-4xl text-blue-500">Hello from Electron</span>
</div> */
}
