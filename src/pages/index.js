import * as React from "react"

import Layout from "../components/Layout"

const index = () => {
  return (
    <Layout>
      <div class="text-center">
        <h1>Welcome to my professional portfolio!</h1>
      </div>
      <div class="container mx-auto">
        <div className=" bg-slate-100 px-16 py-8">
          <p class="py-4">
            As I embark on the exciting journey of re-developing this website, I
            am thrilled to offer you a glimpse into my career and professional
            experiences. This digital space will soon serve as a comprehensive
            repository of my resume, showcasing the diverse skill set and
            accomplishments I've accumulated throughout my professional journey.
            From project highlights to educational background, I aim to provide
            you with a detailed overview of my capabilities and achievements.
            Stay tuned as I craft a platform that not only reflects my
            dedication to excellence but also serves as a testament to my
            passion for continuous growth and contribution in the professional
            realm. Thank you for visiting, and I look forward to sharing my
            professional story with you.
          </p>
          <p class="py-4">
            In the meantime, please check out the following links:
          </p>
          <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li>
              <a
                class="text-blue-600 dark:text-blue-500 hover:underline"
                href="https://linkedin.com/in/junclemente"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                class="text-blue-600 dark:text-blue-500 hover:underline"
                href="https://github.com/junclemente"
                target="_blank"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default index

export const Head = () => {
  return <title>Home</title>
}
