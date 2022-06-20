import React, { useState } from 'react'
import Categories from './Categories';
import Menu from './Menu';
import items from './data'

const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (catelory) => {
    if (catelory === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === catelory)
    setMenuItems(newItems)
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
      </section>
      <Categories filterItems={filterItems} categories={categories}></Categories>
      <Menu items={menuItems}></Menu>
    </main>
  );
}

export default App;
