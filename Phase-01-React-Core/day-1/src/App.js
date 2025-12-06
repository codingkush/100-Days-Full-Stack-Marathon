import './App.css';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
   <div style={styles.container}>

     <h1>Day 1 – Profile Cards</h1>
     <div style={styles.cardContainer}>
  
       <ProfileCard
        name="Kush Gupta"
        role="Full Stack Learner"
        description = "Starting my 100-day full stack marathon!"
        imageUrl = "https://i.pravatar.cc/150?img=3"
       />

       <ProfileCard
        name="Aarav Sharma"
        role="Frontend Developer"
        description = "Passionate about React and UI design."
        imageUrl = "https://i.pravatar.cc/150?img=8"
       />

       <ProfileCard
        name="Riya Mehta"
        role="Backend Developer"
        description = "Learning Spring Boot and building APIs."
        imageUrl = "https://i.pravatar.cc/150?img=5"
       />

     </div>
   </div>
  );
}

export default App;

const styles = {
  container: {
    padding: "20px",
    marginTop:"120px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
}