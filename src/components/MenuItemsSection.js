import React from 'react'

function MenuItems({ id, title, category, price, img, desc }) {
    const appetizer = [
        'Calamari',
        'Crispy Wings',
        'Mozzarella Sticks',
        'Queso Dip',
        'Guacamole & Chip',
    ]

    const appetizerPrice = [
        '$12.99',
        '$15.99',
        '$6.99',
        '$8.99',
        '$10.99',
    ]

    const Salad = [
        'Thai Saliad',
        'Caesar Salad',
        'House Salad'
    ]

    const SaladPrice = [
        '$13.99',
        '$12.99',
        '$10.99',
    ]

    const Pizza = [
        'margherita Pizza',
        'Pepperoni Pizza',
        'Truffle Mushroom Pizza',
        'Italian Sausage Pizza',
        'Vegan Pizza',
    ]

    const PizzaPrice = [
        '$22.99',
        '$21.99',
        '$28.99',
        '$22.99',
        '$20.00'
    ]

    const Beverages = [
        'Sprite',
        'Coke',
        'Diet Coke',
        'Apple Juice',
        'Orange Juice',
        'House Tea',
        'Sparkling Water',
        'Water'
    ]

    const BeveragesPrice = [
        '$2.99',
        '$2.99',
        '$2.99',
        '$2.99',
        '$2.99',
        '$1.99',
        '$3.99',
        '$1.99',
    ]

    const Entree = [
        'Italian Sausage Potato Lasagna',
        'Seared Salmon',
        'Duck Confit',
        'Seafood Stew',
        'Spicy Chicken Cacciatore',
        'Roasted Beef Tenderloin'
    ]

    const EntreePrice = [
        '$22.99',
        '$20.99',
        '$24.99',
        '$26.99',
        '$23.99',
        '$28.99',
    ]
    const Sides = [
        'Cajun Fries',
        'Potato Tots',
        'small Salad'
    ]

    const SidesPrice = [
        '$5.99',
        '$7.99',
        '$4.99'
    ]

    const Cocktails = [
        'House Margarita',
        'Gin & Tonic',
        'Martini',
        'Old Fashion',
        'Mint Mojito'
    ]

    const CocktailsPrice = [
        '$13.99',
        '$12.99',
        '$14.99',
        '$15.99',
        '$13.99'
    ]
    const Wines = [
        'House Red',
        'House White',
        'Pinot Nior',
        'Cabernet Sauvignon',
        'Chardonnay',
        'SparklingWine'
    ]

    const WinesPrice = [
        '$12.99',
        '$12.99',
        '$15.99',
        '$16.99',
        '$15.99',
        '$12.99'
    ]
    return (
        <div className='Restaurant-Menu'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <h2>Appetizer </h2>
                        <div className='underline'></div>
                        <div className='row'>
                            <div className='col'>
                                <ul className='menu-items'>
                                    {appetizer.map((appetizer) =>
                                        <li key={appetizer} value={appetizer}>
                                            {appetizer}
                                        </li>)}
                                </ul>
                            </div>
                            <div className='col'>
                                <ul className='prices'>
                                    {appetizerPrice.map((Price) =>
                                        <li key={Price} value={Price}>
                                            {Price}
                                        </li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <h2>Entree</h2>
                        <div className='underline'></div>
                        <div className='row'>
                            <div className='col'>
                                <ul className='menu-items'>
                                    {Entree.map((Entree) =>
                                        <li key={Entree} value={Entree}>
                                            {Entree}
                                        </li>)}
                                </ul>
                            </div>
                            <div className='col'>
                                <ul className='prices'>
                                    {EntreePrice.map((Price) =>
                                        <li key={Price} value={Price}>
                                            {Price}
                                        </li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h2>Salad</h2>
                        <div className='underline'></div>
                        <div className='row'>
                            <div className='col'>
                                <ul className='menu-items'>
                                    {Salad.map((Salad) =>
                                        <li key={Salad} value={Salad}>
                                            {Salad}
                                        </li>)}
                                </ul>
                            </div>
                            <div className='col'>
                                <ul className='prices'>
                                    {SaladPrice.map((Price) =>
                                        <li key={Price} value={Price}>
                                            {Price}
                                        </li>)}
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className='col'>
                        <h2>Sides</h2>
                        <div className='underline'></div>
                        <div className='row'>
                            <div className='col'>
                                <ul className='menu-items'>
                                    {Sides.map((Sides) =>
                                        <li key={Sides} value={Sides}>
                                            {Sides}
                                        </li>)}
                                </ul>
                            </div>
                            <div className='col'>
                                <ul className='prices'>
                                    {SidesPrice.map((Price) =>
                                        <li key={Price} value={Price}>
                                            {Price}
                                        </li>)}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h2>Pizza</h2>
                        <div className='underline'></div>
                        <div className='row'>
                            <div className='col'>
                                <ul className='menu-items'>
                                    {Pizza.map((Pizza) =>
                                        <li key={Pizza} value={Pizza}>
                                            {Pizza}
                                        </li>)}
                                </ul>
                            </div>
                            <div className='col'>
                                <ul className='prices'>
                                    {PizzaPrice.map((price) =>
                                        <li key={price} value={price}>
                                            {price}
                                        </li>)}
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className='col'>
                        <h2>Cocktails</h2>
                        <div className='underline'></div>
                        <div className='row'>
                            <div className='col'>
                                <ul className='menu-items'>
                                    {Cocktails.map((Cocktails) =>
                                        <li key={Cocktails} value={Cocktails}>
                                            {Cocktails}
                                        </li>)}
                                </ul>
                            </div>
                            <div className='col'>
                                <ul className='prices'>
                                    {CocktailsPrice.map((Price) =>
                                        <li key={Price} value={Price}>
                                            {Price}
                                        </li>)}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <h2>Beverages</h2>
                        <div className='underline'></div>
                        <div className='row'>
                            <div className='col'>
                                <ul className='menu-items'>
                                    {Beverages.map((Beverages) =>
                                        <li key={Beverages} value={Beverages}>
                                            {Beverages}
                                        </li>)}
                                </ul>
                            </div>
                            <div className='col'>
                                <ul className='prices'>
                                    {BeveragesPrice.map((Price) =>
                                        <li key={Price} value={Price}>
                                            {Price}
                                        </li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <h2>Red/Whites</h2>
                        <div className='underline'></div>
                        <div className='row'>
                            <div className='col'>
                                <ul className='menu-items'>
                                    {Wines.map((Wines) =>
                                        <li key={Wines} value={Wines}>
                                            {Wines}
                                        </li>)}
                                </ul>
                            </div>
                            <div className='col'>
                                <ul className='prices'>
                                    {WinesPrice.map((Price) =>
                                        <li key={Price} value={Price}>
                                            {Price}
                                        </li>)}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='bottom-line'>
                <i>*Lorem ipsum dolor sit amet consectetur. At varius purus in varius pharetra ut maecenas eget. Lorem ipsum dolor sit amet consectetur..</i>
            </div>
        </div>
    )
}

export default MenuItems