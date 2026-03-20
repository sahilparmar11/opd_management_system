import { TableHead } from "@/components/ui/table"
import { ArrowDown, ArrowUpDown, ArrowUp } from "lucide-react"

interface SortableHeaderProps {
  label: string;
  sortKey: string;
  currentSort: { key: string; direction: 'asc' | 'desc' } | null;
  onSort: (key: string) => void;
  className?: string; // Optional for text-right alignments
}

export function SortableHeader({ label, sortKey, currentSort, onSort, className = "" }: SortableHeaderProps) {
  const isActive = currentSort?.key === sortKey;
  const isAscending = isActive && currentSort?.direction === 'asc';

  return (
    <TableHead 
      className={`cursor-pointer group hover:bg-muted/50 transition-colors select-none ${className}`}
      onClick={() => onSort(sortKey)}
    >
      <div className={`flex items-center gap-1 ${className.includes('text-right') ? 'justify-end' : ''}`}>
        <span className={isActive ? 'text-primary font-medium' : ''}>{label}</span>
        {isActive ? (
          isAscending ? (
            <ArrowUp className="w-4 h-4 text-primary" />
          ) : (
            <ArrowDown className="w-4 h-4 text-primary" />
          )
        ) : (
           <ArrowUpDown className="w-4 h-4 text-muted-foreground/0 group-hover:text-muted-foreground/50 transition-colors" />
        )}
      </div>
    </TableHead>
  )
}
