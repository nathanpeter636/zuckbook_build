import React from "react";
import Story from "./Story";

import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://www.newstatesman.com/sites/default/files/styles/cropped_article_image/public/blogs_2018/04/gettyimages-944363520.jpg?itok=G0GrSHJa"
        profileSrc="https://www.thenation.com/wp-content/uploads/2020/09/zuckerberg-testify-ap-img.jpg"
        title="Mark ZUCK"
      />
      <Story
        image="https://nypost.com/wp-content/uploads/sites/2/2020/11/jack-dorsey-twitter-01.jpg?quality=80&strip=all"
        profileSrc="https://nypost.com/wp-content/uploads/sites/2/2020/11/jack-dorsey-twitter-01.jpg?quality=80&strip=all"
        title="Jack Dorsey"
      />
      <Story
        image="https://media.wired.com/photos/5c0fddd5bbcfae2d7b3dea25/1:1/w_771,h_771,c_limit/Business-Pichai_hearing-1071792818-w.jpg"
        profileSrc="https://www.thenation.com/wp-content/uploads/2020/09/zuckerberg-testify-ap-img.jpg"
        title="Sundar Pichai"
      />
      <Story
        image="https://static01.nyt.com/images/2020/07/29/business/29tech-hearing-apple/29tech-hearing-apple-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
        profileSrc="https://static01.nyt.com/images/2020/07/29/business/29tech-hearing-apple/29tech-hearing-apple-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
        title="Tim Cook"
      />
      <Story
        image="https://economictimes.indiatimes.com/thumb/msid-77256555,width-1200,height-900,resizemode-4,imgsize-604785/jeff-bezos.jpg?from=mdr"
        profileSrc="https://economictimes.indiatimes.com/thumb/msid-77256555,width-1200,height-900,resizemode-4,imgsize-604785/jeff-bezos.jpg?from=mdr"
        title="Jeff Bezos"
      />
    </div>
  );
}

export default StoryReel;
