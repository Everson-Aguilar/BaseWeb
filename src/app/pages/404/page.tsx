"use client";

import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

// Components
import Header from "../../components/header";
import Footer from "../../components/footer";
import Contact from "../../components/el_guias";
import MeettheFounder from "../../components/venAvivirUnaVidaDiferente";
// Styles
import "../../globals.css";

const P_404: React.FC = () => {
    return (
        <>
            <Head>
                <title>404 - Página no encontrada</title>
                <meta name="description" content="La página que buscas no existe. Explora más contenido en nuestro sitio web." />
            </Head>
            
            <main className="error_404">
                <section className="error_message">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="error_title"
                    >
                        404
                    </motion.h1>
                    <p className="error_description">
                        Lo sentimos, la página que buscas no existe.
                    </p>
                    <motion.a
                        href="/"
                        className="back_home"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        Regresar al inicio
                    </motion.a>
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default P_404;

