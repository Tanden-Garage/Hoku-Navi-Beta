import { FC } from "react"

import { Drawer } from "@/components/ui/Drawer"
import { Footer } from "@/components/ui/Footer"
import { Header } from "@/components/ui/Header"

export const Layout: FC = ({ children }) => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        <Header />
        <main className="p-1">{children}</main>
        <Footer />
      </div>

      <Drawer />
    </div>
  )
}
