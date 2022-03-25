import { graphql } from 'gatsby'

export const flexibleSectionsFragment = graphql`
  fragment flexibleSectionsFragment on CraftAPI_flexibleSections_flexibleSection_BlockType {
    theme
    # title: textBlockHeader
    shortTitle
    bleedDirection: imageBleedDirection
    headerImage: image {
      url
    }
    blocks: children {
      typeHandle
      ... on CraftAPI_flexibleSections_moreDetails_BlockType {
        # textBlockHeader
        children {
          ... on CraftAPI_flexibleSections_horizontalImageText_BlockType {
            id
            horizontalLayout
            textBlock {
              ... on CraftAPI_textBlock_BlockType {
                header
                copy
              }
            }
            singleMedia {
              ... on CraftAPI_singleMedia_BlockType {
                id
                videoURL
                image {
                  ... on CraftAPI_s3_Asset {
                    id
                    url(width: 2400)
                  }
                }
              }
            }
          }
        }
      }
      ... on CraftAPI_flexibleSections_powertrainOptions_BlockType {
        image {
          ... on CraftAPI_s3_Asset {
            id
            url(width: 2400)
          }
        }
        children {
          ... on CraftAPI_flexibleSections_powertrainOption_BlockType {
            # textBlockHeader
            children {
              ... on CraftAPI_flexibleSections_powertrainOptionDetails_BlockType {
                textBlockCopy
                # textBlockHeader
              }
            }
          }
        }
      }
      ... on CraftAPI_flexibleSections_oneColumnTextBlock_BlockType {
        # align: textAlign
        textBlock {
          ... on CraftAPI_textBlock_BlockType {
            header
            copy
          }
        }
      }
      ... on CraftAPI_flexibleSections_oneColumnImageTextBlock_BlockType {
        singleMedia {
          ... on CraftAPI_singleMedia_BlockType {
            alt
            label
            autoplayVideo
            videoURL
            image {
              ... on CraftAPI_s3_Asset {
                url(width: 2400)
              }
            }
          }
        }
        textBlock {
          ... on CraftAPI_textBlock_BlockType {
            header
            copy
          }
        }
      }
      ... on CraftAPI_flexibleSections_twoColumnImagesBlock_BlockType {
        children {
          ... on CraftAPI_flexibleSections_image_BlockType {
            singleMedia {
              ... on CraftAPI_singleMedia_BlockType {
                alt
                label
                autoplayVideo
                videoURL
                image {
                  ... on CraftAPI_s3_Asset {
                    url(width: 1400)
                  }
                }
              }
            }
          }
        }
      }
      ... on CraftAPI_flexibleSections_twoColumnImageTextBlock_BlockType {
        children {
          ... on CraftAPI_flexibleSections_oneColumnImageTextBlock_BlockType {
            singleMedia {
              ... on CraftAPI_singleMedia_BlockType {
                alt
                label
                autoplayVideo
                videoURL
                image {
                  ... on CraftAPI_s3_Asset {
                    url(width: 1400)
                  }
                }
              }
            }
            textBlock {
              ... on CraftAPI_textBlock_BlockType {
                header
                copy
              }
            }
          }
        }
      }
      ... on CraftAPI_flexibleSections_threeColumnImagesBlock_BlockType {
        children {
          typeHandle
          ... on CraftAPI_flexibleSections_image_BlockType {
            singleMedia {
              ... on CraftAPI_singleMedia_BlockType {
                autoplayVideo
                videoURL
                label
                image {
                  ... on CraftAPI_s3_Asset {
                    url(width: 1000)
                  }
                }
              }
            }
          }
        }
      }
      ... on CraftAPI_flexibleSections_carousel_BlockType {
        fullWidth
        children {
          ... on CraftAPI_flexibleSections_oneColumnImageTextBlock_BlockType {
            textBlock {
              ... on CraftAPI_textBlock_BlockType {
                header
                copy
              }
            }
            singleMedia {
              ... on CraftAPI_singleMedia_BlockType {
                autoplayVideo
                videoURL
                image {
                  ... on CraftAPI_s3_Asset {
                    url
                  }
                }
              }
            }
          }
        }
      }
      ... on CraftAPI_flexibleSections_sliderBlock_BlockType {
        children {
          ... on CraftAPI_flexibleSections_oneColumnImageTextBlock_BlockType {
            textBlock {
              ... on CraftAPI_textBlock_BlockType {
                header
                copy
              }
            }
            singleMedia {
              ... on CraftAPI_singleMedia_BlockType {
                autoplayVideo
                videoURL
                image {
                  ... on CraftAPI_s3_Asset {
                    url
                  }
                }
              }
            }
          }
        }
      }
      ... on CraftAPI_flexibleSections_horizontalImageText_BlockType {
        textBlock {
          ... on CraftAPI_textBlock_BlockType {
            header
            copy
          }
        }
        singleMedia {
          ... on CraftAPI_singleMedia_BlockType {
            autoplayVideo
            videoURL
            image {
              ... on CraftAPI_s3_Asset {
                url
              }
            }
          }
        }
        layout: horizontalLayout
      }
    }
  }
`
