import UserProfileCard from './components/UserProfileCard'
import './App.css'

function App() {
  return (
    <div className="app-container">
      {/* Example of a regular profile */}
      <UserProfileCard isOwnProfile={false} />
      
      {/* Example of own profile - uncomment to test
      <UserProfileCard isOwnProfile={true} /> 
      */}
    </div>
  )
}

export default App
