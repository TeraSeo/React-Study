import React from "react";

const styles = {
    wrapper: {
        margin: 8, 
        padding: 8, 
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold"
    },
    commentText: {
        color: "black",
        fontSize: 16
    }
}

function Comment(props) { // Comment 컴포넘트, props = property, 즉 함수의 parameter와 같다. 
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAACUCAMAAADf7/luAAAAflBMVEX///8wMzj8/PwtMDX29vYpLDLw8PAAAAAjJizl5eXi4uLe3t4xMzbp6enz8/MgJCosLS+6urtMTlEaHiXR0dEAAA4IDxirq6wjJCdFRkfHx8i0tLUVGR+IiYpVVlh1dniAgYKgoaKRkZJmZ2gbHSBdX2A4Oz8TFBcABw9AQ0ivvUTiAAAK6ElEQVR4nO1caZeiOhA1idEoUcIihEV2UP//H3wVlx67XRIQp+e84/3WMwrXStVNVWWZTD744IMPPvjggw/+31gvLD+OY8eJY99arH+bzn3M4rKoWzfqOkQIQV13cNu6KOPZbxO7xmyZ5N0m8KQAUIIAQJZSIWQTBF2eLP8Juuu4rFlgK36cA7U0DY7YNVJwBP9M7IDVZQyugH+T56pqUSMI2JClm7l0620ZJo7jJGG5rQ9yv08Z/CdiDW+rxe9QxFiZsw1siriwWefWoT+9+dTUD3O3Ew0FZ7D37S8ZdpbUcwljbu/c4h7LC4Bt4aYe+IG9r5O/7LHKoE7GbBj0IM3jxWOa588v4jwIwG2ZnTmTv2hXPMFxtKNgJOImOpYXTBNXQNzR4BD/LaLwHmu7pxzZduEYvxQ+iOOCSQ5ct9Y7+V0jjGDc6bx+4pz3MfXrjYChOJSTv+ECVpsKRFnmn/y1J/yMUkTT+i+Y1elshBo3GWoSnLgNeE7nvNmquJQUkU2+GGLPyYncIp8TJGT5RqJ4sqpTmHCi+MUHxZHkJG1Xo7C6i6XbIOLVyxcfgyeL2kO8cd/mrJbLON9XY6Sd62oP80Dkj/CoG+CJ30DUSmek5zmMEtG86kd34TPKX3fRE1QwxZGALPENVvU7iiS3RpQWi9tIdKNTtYQEi65GJIon6wPjQoxMdXVgSGZjx+oig6d2o4rVrJaI8tFFBVsd5bIeMWfFhQeTyjvUzxIUNcV4LhXuwKLOW+bpGJ68K8d5Fp5YkiB7pKfdoGw4sUeKqlUmuFeYWhTPZqvVarY2zl3Bs2g2SlThquHSNXuxaqS4XHqyy4oyNnv91JXcq173LJhEJZTARlPTYtuK1GZElf9UNqI1KUPwJBaCemOMvxKS0mDsl4VnQ3V1AeecsqbQ5l2Q55ZKAvHLAVt6SLb69AmHvEE3ICkxKA6mLeONiTGeYhkRNNcPzXrbCH6HKRJNoRN2cLA5F9HyJap4UjXE22o/t3I9csvzhMbVR9bWQ68GlcUEPWhbX0D0EU+kcnst1UVECXttDixsZFe6D83yJ0QBMtfO7KWNmvyV4V8EiEQ6i+Dt46E/W1U7s89cyvevtC23EgWaaRT0cP6Up8Jeq8dlypk+Hh5i4QoS6BRqeqBapvSgm+OmKaHuUKPiSWijVOul4GJaEHB2jQOUKWrCgUwn05oRpIvIRaY3KRjVfT5ZQcLGiayHFui+R1iuGzbHwKQAL3n+GDzNJfGGClUF+ZjmBROcmzG1a91PTgjxtD7yAJzqJWpmP1eoC0ij09TVATKwITTBc3Zc5rqP+RsjoojrkwcYnXTY8JeS77XFU5UaMm20IhLvYfIfwBPjmqK5NtXPmSFTWWvfuCG0HuKnSxe0WPup1kSjFESmfxYjGjG7j5igVF+QuqZM6UH7rHJH0JAOHUxQgT6FjkZk6u+IN2CaUhlSpw9FoxnqOPp6T7I6yNr7O+qspdSgY1QbMuWy1b+yprTt36RaQVph0DDaPk+i/0Dqczq8tQnp36NY7lTxrEUSGDLdGXhgOUj74x0XukkfsNCn0SfMDZLPhKKgf/AnO84NvjV171XPt6Am/SIHocDAOj9QNSY9eAwiaMQ0NSmS/W7IfFp45GDiMz4ySaYIMmk8LQ8Qxb2Z5rY+5VPAhcHMDxm5iU6uIsK06cENoDJxjbTN19TQR3hGgTKDVEMvuz+RUWLYNNX0JY5EtXnuEVOjpOgnXGOm64Nm/Dk9mJVy72YKWdfz8SfCUCSHMTUffdBe+xlX0phqJDBl/ZnWtmFEKYQ2fUhVNKFpxTksokxV6oRE3vVVoM+k+awzTKUKj0c9SgUrkuIOUWr32RgxTPmrlPda0Z5W0a2weoeqz54qmE31fbAbJAEX/fZHWFu2F1+hxbkMWNUvh4shP+hfnsR7Lnt+C6+SllB2BKWiTfpmxeGgrA8yaTZgrXTth5VC6A/o2w3LpFecmlQnY0JVJ7x/dTJrGRtzj4DJK2vKBlR86gcaVNE3X1uvFsvlcjFb9x+PgVX0JPRQai5T6gXYT6oibzPXdbM6L6rE6uer/o6bz2dXUJLRI6RmTn4A11ZRfwRjNuNR7vQYTSh0THOZb1hAumA6Ca/iIt2zm9qPCLlPc8c0SFopBnXQIOtHG6OhWJVt+rA1Tby0LY244g0a1JXEar18YzAYOOzk00qaUNmFBgzizbBO70R1z5m2qsBxFmjrKE72bqzdagClYzBw8UQIctCM22wrpY7nETbdamILUj7ChhFV3TH6OElRNrIy26gvoXzAdp9rniOQtx24ymN5yH66cpao8y/GkLtn3jrNJRq8b2YNNf/DzXxg0rLpwVN5q/dkF7fFQRQHbxcOPfJoJxsQrUxaEj884HF3qkyRPXSFFyvx5+mD4cfF3tRFr6juH6VnU/nCqjlga6PgwQ8tTZvR35GW9w8ChDvEiuFEJ8sAPailE9nfosqo5P4Qz1wxWExPyD10t4cep3199IvrLr6RIpgPGcjMK0RVI0/c2UQ0M9jR8Qgiuh2klUuHS9QJeNvcFrZYbU4ajpteKlbrxOmQHPoa1oGgzU8HSgwX9R/A/t5VgaluzqlRA/wpKg+xH/sdZsaLpQ+M+iNIMeSXA7Oob49BN7s6q91LRBEKvtMKGaJkhDI49rjg196+agYJ1BXI7jpIfaVdY5wSwZBSyevF+eqVcDpBXhl1mnm8eTWcTgAJgUd9/bl0XwqnI67rJVAX8co8eg1fHbz70v9w2DT6Hd65WsaTUHLSjHb2pNwhclmaXLeGO0+egrVnOYk7wYOh26RuMc0bTulphJbz245uf9D5ST4X6jSHdp+bMdRJQ4lod6SKQ/G6n1IaHlOqRSfAvKMe5lmCUrHsZFXHfk34Eb+csVuAJ1E+8rl+X8Kvj1T1gCd+95pOybM8r10YqbHPx+Gj68vDSVxmee/C5A+IzFfHc7XLA+O0u80BX0bcgFXdkwJMSzpUAZgoTwHkQ/JM5FsORwJVLtj50X7WrzA9gnOaXk5+x4LCX2OdCf0BXx0SDsAkx/EqI69vZPEmOk8g03In3nUy9phHRh4iTX4O1mUl+7mrLdWqj/qZKxBo7kVvPBq/yNTEejkei5d5Kh8vmH43p5BBbp2Dx3dtRNLsrdeO4EpSJOb5RaxXW9c2kSzG3O3Xd4o9uGjTa/VvCEJuc5S6zqXJuEzqND3dJvMINE3r5KRv8C3HTRGXfPCOeFOo/h5U0JS2X062tspon9r0zho/IZSlm660vq5ssVoB4tSMfsj2HlOI+k5dwbHJffx1A8PM2dYuYp7NmDiBqT+I224vaxLqw36+Z5Dgd+86aHkDHzwNckxaXF9tMl3GSbnN6yw6dIcoq/NtmcTLq+4djgsBuS0NijeJ0z1g55ASTmyUnW9uuTSb8HR9PMWpjnFe/un8Q5wMgYfTtDO/RGUcJC6oABioyeOF7tV4FeeNGgZmuyZrEyNjFbYB5WDY1C0S6yw5XzT+8JlayTbzbAL23GfhG2/BeIK14+6U8lN1a1P++NYmqhJaagdunwW/EXG02rLKCEz/hBCZzjfMras/N2HlEdtsUtACsKaHsurVKz9exSyu2mYnj8kKqKd3vlwsSL3zziQh915b/RM3t2F1YxvaBB6jlHzJP1GXtjEv2BCYn2a/egXaD3zdgqf2cII1u8jN/rlb8L6ATzcLOuebBf8pS37wwQcffPDBBx+8Af8Bdre5BAIV9RkAAAAASUVORK5CYII=" style={styles.image}/>
            </div>

            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>
                    {props.commentText}
                </span>
            </div>
        </div>
    )
}

export default Comment;