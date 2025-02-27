
        let postColor = "#ffffff"; 

        function setColor(color) {
            postColor = color;
        }

        function addEmoji(emoji) {
            document.getElementById("postInput").value += emoji;
        }

        function addPost() {
            let postText = document.getElementById("postInput").value;
            let imageInput = document.getElementById("imageInput");
            let file = imageInput.files[0];

            if (postText.trim() === "" && !file) return;

            let post = document.createElement("div");
            post.className = "post";
            post.style.backgroundColor = postColor;

            
            let postHeader = document.createElement("div");
            postHeader.className = "post-header";
            let profilePic = document.createElement("div");
            profilePic.className = "profile-pic";
            let username = document.createElement("span");
            username.innerText = "Ayan Habib"; 
            postHeader.appendChild(profilePic);
            postHeader.appendChild(username);
            post.appendChild(postHeader);
            
    
            
            if (postText) {
                let textNode = document.createElement("p");
                textNode.className = "post-text";
                textNode.innerText = postText;
                post.appendChild(textNode);
            }

            
            if (file) {
                let reader = new FileReader();
                reader.onload = function (e) {
                    let img = document.createElement("img");
                    img.src = e.target.result;
                    post.appendChild(img);
                    document.getElementById("feed").prepend(post); 
                };
                reader.readAsDataURL(file);
            } else {
                document.getElementById("feed").prepend(post); 
            }

            document.getElementById("postInput").value = "";
            imageInput.value = "";
        }
    