// import module.css here;
import  styles from "./UserDetails.module.css"


const UserDetails = (props) => {
  // console.log(props.userDetails)

  const { userDetails } = props

  let num = (userDetails.followers / 1000) + (userDetails.followers % 100) + "K" ;
   
  console.log(num)

  return (
    <>
      <div data-testid="user-container" className={styles.main}>
        {/* user image */}
        <img src={userDetails.avatar} alt="image"  className={styles.img}/>
        <div>
          <div className={styles.name}>
            <h3 data-testid="user-fname">{userDetails. first_name}</h3>
            <h3 data-testid="user-lname">{userDetails.last_name}</h3>
          </div>
          <div>
            <p data-testid="user-address" className={styles.address}>{userDetails.address}</p>
          </div>
        </div>
        <div>
          <h3 data-testid="user-karma">{userDetails.karma} <br/> Karma</h3>
        </div>
        <div>
          <h3 data-testid="user-followers">{num} <br/> Followers</h3>
        </div>
        <div>
          <h3 data-testid="user-posts">{userDetails.posts} <br/> Posts</h3>
        </div>
        <button className={styles.follow_btn} data-testid="follow-btn">{userDetails.is_following ? "Follow" : "UnFollow"}</button>
      </div>
    </>
  );
};
export default UserDetails;
