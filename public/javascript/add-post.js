//add a post
async function newFormHandler(event) {
    event.preventDefault();
  
    //get post title and data
    const title = document.querySelector('input[name="post-title"]').value;
    const post_data = document.querySelector('input[name="post-data"]').value;

    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_data
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      const data = await response.json();
      
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);