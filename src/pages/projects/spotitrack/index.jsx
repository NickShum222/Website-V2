import React from 'react'
import { SEO } from '@/components'

const tools = ["Spotify API", "Next.js", "React", "Express.js", "Node.js", "TailwindCSS",  "Figma"];
const index = () => {
  return (
      <section>
          <SEO theme={"dark"} />
          <div
              className={`lg:px-[128px] md:px-[64px] min-h-[100dvh] w-[100dvw] px-[24px] py-[6%] flex flex-row justify-between items-start bg-secondary `}
          >
              <div className={"w-[60%] flex flex-col justify-start"}>
                  <div
                      className={
                          "lg:text-headingLgClamp md:text-[10vw] sm:text-[10.092vw] text-[12.427vw] leading-[0.8] tracking-tight font-[700] text-primary"
                      }
                  >
                      SPOTITRACK
                  </div>
                  <div
                      className={
                          "flex justify-start items-center w-full my-[3%] flex-wrap"
                      }
                  >
                      {tools.map((tool, index) => (
                          <div
                              key={index}
                              className={
                                  "text-[1vw] border-[1px] border-solid rounded-full mr-[1%] border-primary text-primary px-[1.5%] py-[0.25%] font-[600] uppercase text-center italic"
                              }
                          >
                              {tool}
                          </div>
                      ))}
                  </div>
                  <div className={"flex flex-col justify-start w-full"}>
                      <p
                          className={
                              "w-full text-primary leading-[1.4] font-[500] text-[1.089vw]"
                          }
                      >
                          SpotiTrack streamlines your Spotify experience with easy access to recent tracks, top artists/tracks, and personal playlists through an intuitive user interface.
                      </p>
                      <p
                          className={
                              "w-full text-primary leading-[1.4] font-[300] text-[1.089vw] mt-[3%]"
                          }
                      >
                          Leveraging Next.js, React.js, and Tailwind CSS, the frontend provides a responsive, visually engaging interface for an optimal user experience. The backend, powered by Express and Node.js ensures the application follows the OAuth 2.0 protocol, ensuring secure, user-protected api calls to the Spotify API.
                      </p>
                      <p
                          className={
                          "w-full text-primary leading-[1.4] font-[300] text-[1.089vw] mt-[3%]"
                      }>

                      </p>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default index