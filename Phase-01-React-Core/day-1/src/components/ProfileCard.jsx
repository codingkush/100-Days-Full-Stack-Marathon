import React from "react";

function ProfileCard({name,role,description,imageUrl}){
    return(
        <div style={styles.card}>
            <img src={imageUrl} alt={name} style={styles.image}/>
            <h2 style={styles.name}>{name}</h2>
            <h4 style={styles.role}>{role}</h4>
            <p style={styles.description}>{description}</p>
        </div>
    );
}

export default ProfileCard;

const styles = {
    card: {
    width: "260px",
    padding: "16px",
    borderRadius: "12px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
    margin: "20px",
  },
  image: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  name: {
    margin: "12px 0 4px",
  },
  role: {
    margin: "4px 0",
    color: "#666",
  },
  description: {
    fontSize: "14px",
    color: "#777",
  },
}