import style from '../component/Header/header.module.css'
import Link from 'next/link'
import React from 'react'
export default function Products() {
  return (
    <div>
      <Link href={"http://localhost:3000/products/detail"} className={style.list}>Products list</Link>

    </div>
  )
}

