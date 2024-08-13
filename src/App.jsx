
import './App.css'
import Tabs from './components/Tabs'

const tabsData = [
  {
    label: 'profile',
    content: <div>Prfile</div>
  },
  {
    label: 'Dashboard',
    content: <div>Dashboard</div>
  },
  {
    label: 'Settings',
    content: <div>Settings</div>
  },
  {
    label: 'invoice',
    content: <div>invoice</div>
  }
]

function App() {

  return (
    <>
      <Tabs tabsData={tabsData} />
    </>
  )
}

export default App
