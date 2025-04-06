import React, { useState } from "react"
import * as cls from "./cls"

const TopicAssigner = () => {
  const [namesInput, setNamesInput] = useState("")
  const [topicsInput, setTopicsInput] = useState("")
  const [replacement, setReplacement] = useState("with")
  const [results, setResults] = useState([])

  const assignTopics = () => {
    const names = namesInput
      .split(/[\n,]/)
      .map((n) => n.trim())
      .filter((n) => n)
    const topics = topicsInput
      .split(/[\n,]/)
      .map((t) => t.trim())
      .filter((t) => t)
    const assigned = new Set()
    const output = names.map((name) => {
      let topic
      if (replacement === "with") {
        topic = topics[Math.floor(Math.random() * topics.length)]
      } else {
        const available = topics.filter((t) => !assigned.has(t))
        topic = available.length
          ? available[Math.floor(Math.random() * available.length)]
          : "No topic assigned"
        assigned.add(topic)
      }
      return { name, topic }
    })
    setResults(output)
  }

  return (
    <div className={cls.form}>
      <label>
        Names:
        <textarea
          className={cls.textarea}
          rows="5"
          value={namesInput}
          onChange={(e) => setNamesInput(e.target.value)}
        />
      </label>

      <label>
        Topics:
        <textarea
          className={cls.textarea}
          rows="5"
          value={topicsInput}
          onChange={(e) => setTopicsInput(e.target.value)}
        />
      </label>

      <label>
        Assignment Type:
        <select
          className={cls.select}
          value={replacement}
          onChange={(e) => setReplacement(e.target.value)}
        >
          <option value="with">With Replacement</option>
          <option value="without">Without Replacement</option>
        </select>
      </label>

      <button className={cls.button} onClick={assignTopics}>
        Assign Topics
      </button>

      {results.length > 0 && (
        <ul className={cls.resultList}>
          {results.map(({ name, topic }, idx) => (
            <li key={idx} className={cls.resultItem}>
              {name} → {topic}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TopicAssigner
