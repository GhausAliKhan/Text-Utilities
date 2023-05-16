import React from 'react'

function About(props) {
    return (
        <div className={`container text-center text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <h1 className="display-3">About Us</h1>
            <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti consectetur illum quod animi, delectus eveniet libero perferendis reprehenderit quae deserunt.</p>
            <p className='lead'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis sint reiciendis ipsa, odio corrupti inventore, sapiente dolores sunt ipsum, voluptatibus nobis? Illo veritatis aut assumenda ipsam aperiam quas. Ipsum explicabo nesciunt ut commodi aliquid tempora repellendus a ullam consectetur eum, quos officiis adipisci vero, cumque nulla earum, hic maiores libero? Qui dicta minima temporibus dignissimos ea quae, obcaecati hic et, quas numquam maiores provident modi nihil molestiae quidem vero doloribus illo accusamus totam nostrum harum necessitatibus accusantium ullam! Dicta, autem necessitatibus. Id suscipit accusamus ipsam voluptate rem inventore labore, mollitia quidem architecto non veniam magni rerum at autem. Neque, nesciunt!</p>
            <p className='lead'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi voluptatem animi fugit molestiae cupiditate molestias id natus architecto esse quibusdam. Commodi porro unde facere ipsam nemo ratione, asperiores necessitatibus vero quibusdam, deserunt fugiat odit corrupti deleniti aliquam repudiandae? Quibusdam quas pariatur excepturi dicta iure itaque alias. Natus magni nulla rerum.</p>

        </div>
    )
}

export default About