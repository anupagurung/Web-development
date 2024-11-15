document.addEventListener("DOMContentLoaded", function () {
    const forumForm = document.getElementById("forumForm");
    const discussionsContainer = document.getElementById("discussionsContainer");

    // Event listener for forum form submission
    forumForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        const username = document.getElementById("username").value;
        const topic = document.getElementById("topic").value;
        const message = document.getElementById("message").value;

        // Create a new discussion topic block
        const discussionBlock = document.createElement("div");
        discussionBlock.classList.add("discussion-block");

        // Add topic, username, date, and message
        const currentDate = new Date().toLocaleDateString();
        discussionBlock.innerHTML = `
            <h4>${topic}</h4>
            <p>Posted by <strong>${username}</strong> on ${currentDate}</p>
            <p>${message}</p>
            <div class="comments-section">
                <h5>Comments</h5>
                <div class="comments" id="comments-${username}-${topic}"></div>
                <form class="comment-form" onsubmit="postComment(event, '${username}-${topic}')">
                    <label for="comment">Add a Comment:</label>
                    <input type="text" id="comment" name="comment" required>
                    <button type="submit">Post Comment</button>
                </form>
            </div>
        `;

        // Append the new discussion to the discussions container
        discussionsContainer.appendChild(discussionBlock);

        // Reset the form
        forumForm.reset();

        // Alert user about successful post
        alert("Your topic has been posted successfully!");
    });
});

// Function to handle comments submission
function postComment(event, discussionId) {
    event.preventDefault();
    const commentText = event.target.comment.value;

    // Create comment element
    const commentElement = document.createElement("p");
    commentElement.textContent = commentText;

    // Append comment to the discussion comments section
    const commentsDiv = document.getElementById(`comments-${discussionId}`);
    commentsDiv.appendChild(commentElement);

    // Reset comment form
    event.target.reset();
}
