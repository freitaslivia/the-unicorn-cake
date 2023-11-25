import styles from './BodyPage.module.css'

function BodyPage () {
    return(
        <div className={styles.base}>
            <img className={styles.foto} src='https://i0.wp.com/jornal.usp.br/wp-content/uploads/2021/05/20210528_destaque_remedios.png?fit=1200%2C630&ssl=1' />
            <div className={styles.textos}>
                <h2>HOME</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet est
                placerat in egestas. Et netus et malesuada fames ac turpis egestas integer. Sit amet volutpat consequat mauris nunc. Sit amet porttitor eget
                dolor morbi non arcu risus quis. Orci ac auctor augue mauris augue neque gravida in. Nisi est sit amet facilisis magna etiam. Massa tempor
                nec feugiat nisl pretium fusce id velit ut. Neque aliquam vestibulum morbi blandit. Felis donec et odio pellentesque diam volutpat. Nec
                feugiat in fermentum posuere urna nec tincidunt praesent semper. Pellentesque pulvinar pellentesque habitant morbi tristique. Enim ut sem
                viverra aliquet eget sit amet. Diam ut venenatis tellus in metus vulputate eu scelerisque felis. Nibh tellus molestie nunc non. Sollicitudin ac orci
                phasellus egestas tellus. Non sodales neque sodales ut etiam sit amet nisl. Amet tellus cras adipiscing enim eu turpis egestas pretium. A
                diam maecenas sed enim.
                </p>
            </div>
        </div>
    )
}

export default BodyPage