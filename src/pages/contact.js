import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/Layout"
import Main from "../components/Main"
import Icon from "../components/Icon"
import PageTitle from "../components/PageTitle"

export default () => (
  <Layout>
    <Main>
      <PageTitle>Contact</PageTitle>

      <div
        css={css`
          width: 200px;
          margin: 100px auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <a href="https://github.com/melanienolan">
          <Icon>
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </Icon>
        </a>
        <a href={`mailto:melly.nolan@gmail.com`}>
          <Icon width="60" height="60">
            <path d="M1.602 4.707L8 7.906l6.398-3.199A1.6 1.6 0 0012.8 3.2H3.2a1.6 1.6 0 00-1.598 1.507z" />
            <path d="M14.4 6.494L8 9.694l-6.4-3.2V11.2a1.6 1.6 0 001.6 1.6h9.6a1.6 1.6 0 001.6-1.6V6.494z" />
          </Icon>
        </a>
      </div>
    </Main>
  </Layout>
)
