import React from 'react'

type GeneralLayoutProps = {
    children: React.ReactNode
}

export default function GeneralLayout({children}: GeneralLayoutProps) {
    return (
        <div className="flex flex-col h-screen max-w-full">
        {/* header */}
        <div className="w-full p-4 border-b border-grey bg-cyan-300">
            Header
        </div>

        <main className="flex-1 overflow-y-visible">
           {children}
        </main>

        {/* Footer */}
        <div className="w-full text-center border-t border-grey p-4">
          footer
        </div>

      </div>
    )
}