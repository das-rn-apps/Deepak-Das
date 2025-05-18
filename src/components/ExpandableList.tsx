import React, { useState } from 'react';

interface ExpandableListProps<T> {
    items: T[];
    renderItem: (item: T, index: number) => React.ReactNode;
    initialCount?: number;  // how many to show initially, default 3
    orientation?: 'horizontal' | 'vertical'; // default: horizontal (grid)
}

function ExpandableList<T>({
    items,
    renderItem,
    initialCount = 2,
    orientation = 'horizontal',
}: ExpandableListProps<T>) {
    const [expanded, setExpanded] = useState(false);

    const displayedItems = expanded ? items : items.slice(0, initialCount);

    // Map initialCount to Tailwind grid-cols classes (limit to 6 for example)
    const gridColsClassMap: Record<number, string> = {
        1: 'md:grid-cols-1',
        2: 'md:grid-cols-2',
        3: 'md:grid-cols-3',
        4: 'md:grid-cols-4',
        5: 'md:grid-cols-5',
        6: 'md:grid-cols-6',
    };

    const gridColsClass = gridColsClassMap[initialCount] || 'md:grid-cols-3';

    const containerClass =
        orientation === 'horizontal'
            ? `grid gap-5 ${gridColsClass}`
            : 'flex flex-col gap-5';

    return (
        <div>
            <div className={containerClass}>
                {displayedItems.map((item, index) => (
                    <React.Fragment key={index}>
                        {renderItem(item, index)}
                    </React.Fragment>
                ))}
            </div>

            {items.length > initialCount && (
                <div className="text-center mt-8">
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                    >
                        {expanded ? 'Show Less' : `Show All (${items.length})`}
                    </button>
                </div>
            )}
        </div>
    );
}


export default ExpandableList;
