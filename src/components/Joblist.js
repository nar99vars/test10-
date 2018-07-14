import React from 'react';

export default function Joblist({data}) {

  return (
    data.map((item) =>
      <section key={item.id} className={"job-containet"}>
        <h1>{item.title}</h1>
        <hr/>
        <strong> info </strong>
        <p> {item.info}</p>
        <strong> Requairiment </strong>
        <ul>
          {item.requirements.map((ltem, i) => <li key={i}>{ltem}</li>)}
        </ul>
        <p className="deadline">{item.deadline}</p>
      </section>
    )

  )
}