import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
    // bonus challenge
    const renderReadingTime = (minutes) => {
        if (minutes < 30){
            const coffeeCups = Math.ceil(minutes / 5);
            return `${'☕'.repeat(coffeeCups)} ${minutes} min read`;
        } else {
            const bentoBoxes = Math.ceil(minutes / 10);
            return `${'🍱'.repeat(bentoBoxes)} ${minutes} min read`;
        }
    }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} . {renderReadingTime(minutes)}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
