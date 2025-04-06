import React from "react"
import Layout from "../../components/Layout"
import SeoHead from "../../components/SeoHead"
import TopicAssigner from "./TopicAssigner"

const TopicAssignerPage = () => (
  <>
    <SeoHead
      title="Random Topic Assigner – Jun Clemente"
      description="Paste names and topics, then randomly assign them with or without replacement."
    />
    <Layout>
      <h1 className="f2 fw6 tc mb4">Random Topic Assigner</h1>
      <TopicAssigner />
    </Layout>
  </>
)

export default TopicAssignerPage
