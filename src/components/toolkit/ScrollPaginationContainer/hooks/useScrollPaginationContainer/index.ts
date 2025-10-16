// External Libraries
import { useEffect, useRef } from 'react'

// Utils
import { getPaginationParams } from '../../utils'
import { DEFAULT_SCROLL_END_THRESHOLD } from '../../constants'

// Types
import { ScrollDirection } from '../../types'
import type { UsePaginationParams } from './types'

export function useScrollPaginationContainer(props: UsePaginationParams) {
  // Hooks
  const verticalPagination =
    props.direction !== ScrollDirection.Horizontal
      ? props.verticalPagination
      : undefined

  const horizontalPagination =
    props.direction !== ScrollDirection.Vertical
      ? props.horizontalPagination
      : undefined

  // Constants
  const {
    page: horizontalPage,
    endReached: horizontalEndReached,
    isLoadingMore: horizontalIsLoadingMore,
    scrollEndThreshold:
      horizontalScrollEndThreshold = DEFAULT_SCROLL_END_THRESHOLD,
    onGetPage: onGetHorizontalPage
  } = getPaginationParams(horizontalPagination)

  const {
    page: verticalPage,
    endReached: verticalEndReached,
    isLoadingMore: verticalIsLoadingMore,
    scrollEndThreshold:
      verticalScrollEndThreshold = DEFAULT_SCROLL_END_THRESHOLD,
    onGetPage: onGetVerticalPage
  } = getPaginationParams(verticalPagination)

  // Refs
  const scrollRef = useRef<HTMLDivElement>(null)

  // UseEffects
  useEffect(() => {
    if (props.direction === ScrollDirection.Vertical) return

    if (horizontalPage === 1) {
      if (scrollRef.current) scrollRef.current.scrollTo({ left: 0 })
    }
  }, [horizontalPage, props.direction])

  // UseEffects
  useEffect(() => {
    if (props.direction === ScrollDirection.Horizontal) return

    if (verticalPage === 1) {
      if (scrollRef.current) scrollRef.current.scrollTo({ top: 0 })
    }
  }, [verticalPage, props.direction])

  useEffect(() => {
    if (props.direction === ScrollDirection.Horizontal) return

    const handleScroll = () => {
      if (scrollRef.current && onGetVerticalPage) {
        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current
        const scrollEndLimit = scrollHeight - verticalScrollEndThreshold

        if (scrollTop + clientHeight >= scrollEndLimit) {
          onGetVerticalPage(verticalPage + 1)
        }
      }
    }

    const currentRef = scrollRef.current

    if (currentRef && !verticalEndReached && !verticalIsLoadingMore) {
      currentRef.addEventListener('scroll', handleScroll)
    }

    return () => currentRef?.removeEventListener('scroll', handleScroll)
  }, [
    verticalPage,
    props.direction,
    verticalEndReached,
    verticalIsLoadingMore,
    verticalScrollEndThreshold,
    onGetVerticalPage
  ])

  useEffect(() => {
    if (props.direction === ScrollDirection.Vertical) return
    const handleScroll = () => {
      if (scrollRef.current && onGetHorizontalPage) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
        const scrollEndLimit = scrollWidth - horizontalScrollEndThreshold

        if (scrollLeft + clientWidth >= scrollEndLimit) {
          onGetHorizontalPage(horizontalPage + 1)
        }
      }
    }

    const currentRef = scrollRef.current

    if (currentRef && !horizontalEndReached && !horizontalIsLoadingMore) {
      currentRef.addEventListener('scroll', handleScroll)
    }

    return () => currentRef?.removeEventListener('scroll', handleScroll)
  }, [
    horizontalPage,
    props.direction,
    horizontalEndReached,
    horizontalIsLoadingMore,
    horizontalScrollEndThreshold,
    onGetHorizontalPage
  ])

  return { scrollRef }
}
