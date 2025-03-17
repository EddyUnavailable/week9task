// "use client";

// import { useEffect, useState } from 'react';
// import { useUser, withAuth } from '@clerk/nextjs';
// import axios from 'axios';

// const MessageBoard = () => {
//   const { user } = useUser();
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState('');

//   useEffect(() => {
//     fetchComments();
//   }, []);

//   const fetchComments = async () => {
//     const response = await axios.get('/api/comments');
//     setComments(response.data);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (newComment.trim() === '') return;

//     await axios.post('/api/comments', {
//       userId: user.id,
//       comment: newComment,
//     });

//     setNewComment('');
//     fetchComments();
//   };

//   return (
//     <div>
//       <h1>Message Board</h1>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={newComment}
//           onChange={(e) => setNewComment(e.target.value)}
//           placeholder="Write your comment..."
//           required
//         />
//         <button type="submit">Post Comment</button>
//       </form>
//       <div>
//         {comments.map((comment) => (
//           <div key={comment.id}>
//             <p>{comment.comment}</p>
//             <small>{comment.userid} - {new Date(comment.time).toLocaleString()}</small>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default New();