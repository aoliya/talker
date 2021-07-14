import React from 'react'
import styles from './MyPosts.module.css';
import SinglePost from './posts/SinglePost';


const MyPosts = (props) => {
    console.log('RENDER')
   let postsElements = props.postsData.map(post=><SinglePost message={post.post} key={post.id} />)

   let newPostElement = React.createRef()
   
   const onAddPost = ()=>{
       props.addPost();           
   }
   
   const onPostChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
    
   }

   return (
        <div className={styles.postsCardBody}>
            <h3 className={styles.postsTitle}>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}     value={props.newPostText} 
                    onChange={onPostChange}></textarea>
                </div>
                <div className={styles.addPostBtnBox}>
                    <button className="btn btn-warning mt-2" onClick={ onAddPost }>Add post</button>
                </div>
                
            </div>
            
            <div className={styles.posts}>
                {postsElements}
                
            </div>
        </div>
    )
}

export default MyPosts
