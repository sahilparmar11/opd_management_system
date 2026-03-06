export type UsePaginationProps = {
    currentPage: number
    totalPages: number
    paginationItemsToDisplay: number
}

export type UsePaginationReturn = {
    pages: number[]
    showLeftEllipsis: boolean
    showRightEllipsis: boolean
}

export function usePagination({
    currentPage,
    totalPages,
    paginationItemsToDisplay,
}: UsePaginationProps): UsePaginationReturn {
    const showLeftEllipsis = currentPage - paginationItemsToDisplay > 2
    const showRightEllipsis = currentPage + paginationItemsToDisplay < totalPages - 1

    const getPages = () => {
        if (totalPages <= 1) return [1]

        const pages: number[] = []

        // Simple logic to show some pages around current
        // This effectively returns a range
        let start = Math.max(1, currentPage - paginationItemsToDisplay)
        let end = Math.min(totalPages, currentPage + paginationItemsToDisplay)

        // Adjust if near start or end
        if (currentPage <= paginationItemsToDisplay + 1) {
            end = Math.min(totalPages, 2 * paginationItemsToDisplay + 1)
        }
        if (currentPage >= totalPages - paginationItemsToDisplay) {
            start = Math.max(1, totalPages - 2 * paginationItemsToDisplay)
        }

        for (let i = start; i <= end; i++) {
            pages.push(i)
        }
        return pages
    }

    return {
        pages: getPages(),
        showLeftEllipsis,
        showRightEllipsis,
    }
}
