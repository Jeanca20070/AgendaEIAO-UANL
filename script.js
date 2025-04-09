// Base de datos completa de los 32 estados de México
const estadosMexico = {
    "aguascalientes": {
        lugares: "Plaza de la Patria, Museo Nacional de la Muerte, Balneario Ojocaliente",
        evitar: "Algunas colonias periféricas por la noche",
        recomendacion: "Prueba las enchiladas rojas y visita la Feria de San Marcos (abril)."
    },
    "baja california": {
        lugares: "Playas de Tijuana, Valle de Guadalupe, La Bufadora",
        evitar: "Cruces fronterizos sin documentación",
        recomendacion: "Degusta los vinos locales en Ensenada y visita el Museo del Trompo."
    },
    "baja california sur": {
        lugares: "Cabo San Lucas, La Paz, Sierra de la Laguna",
        evitar: "Zonas desérticas sin guía",
        recomendacion: "Nada con tiburones ballena en La Paz (temporada: octubre-abril)."
    },
    "campeche": {
        lugares: "Ciudad amurallada, Calakmul, Edzná",
        evitar: "Zonas arqueológicas sin hidratación",
        recomendacion: "Prueba el pan de cazón y el chile habanero."
    },
    "chiapas": {
        lugares: "Palenque, San Cristóbal de las Casas, Cañón del Sumidero",
        evitar: "Algunas carreteras rurales de noche",
        recomendacion: "Visita las cascadas de Agua Azul y compra artesanías tzotziles."
    },
    "chihuahua": {
        lugares: "Barrancas del Cobre, Creel, Paquimé",
        evitar: "Zonas desérticas extremas sin preparación",
        recomendacion: "Toma el Chepe (tren Chihuahua-Pacífico) y prueba la carne asada estilo norteño."
    },
    "coahuila": {
        lugares: "Museo del Desierto, Parras de la Fuente, Dunas de Bilbao",
        evitar: "Frontera con Texas sin precaución",
        recomendacion: "Visita las bodegas de vino más antiguas de América en Parras."
    },
    "colima": {
        lugares: "Volcán de Colima, Comala, Playa de Oro",
        evitar: "Acercarse al volcán en actividad",
        recomendacion: "Prueba el ponche de granada y el café de Comala."
    },
    "ciudad de méxico": {
        lugares: "Zócalo, Chapultepec, Xochimilco, Teotihuacán",
        evitar: "Taxis no autorizados, ciertas zonas de Tepito de noche",
        recomendacion: "Usa el Metro y visita los museos en domingo (entrada libre)."
    },
    "durango": {
        lugares: "Pueblo Fantasma de Ojuela, Museo del Cine, Sierra de Órganos",
        evitar: "Caminos rurales solitarios",
        recomendacion: "Prueba el caldillo duranguense y visita locaciones de películas del Viejo Oeste."
    },
    "guanajuato": {
        lugares: "Museo de las Momias, Callejón del Beso, San Miguel de Allende",
        evitar: "Estacionarse en zonas prohibidas",
        recomendacion: "Asiste al Festival Cervantino (octubre) y come enchiladas mineras."
    },
    "guerrero": {
        lugares: "Acapulco, Taxco, Ixtapa-Zihuatanejo",
        evitar: "Playas sin vigilancia, ciertas zonas de Acapulco de noche",
        recomendacion: "Prueba el pozole verde y visita las pozas azules de Atzala."
    },
    "hidalgo": {
        lugares: "Prismas Basálticos, Real del Monte, Huasca de Ocampo",
        evitar: "Caminos sinuosos sin precaución",
        recomendacion: "Come pastes (empanadas mineras) y visita los bosques de oyamel."
    },
    "jalisco": {
        lugares: "Guadalajara, Tequila, Chapala, Puerto Vallarta",
        evitar: "Zonas rurales sin guía",
        recomendacion: "Toma un tour por las destilerías de tequila y prueba una torta ahogada."
    },
    "estado de méxico": {
        lugares: "Nevado de Toluca, Valle de Bravo, Teotihuacán",
        evitar: "Autopistas con alto índice de robos",
        recomendacion: "Visita los pueblos mágicos como Metepec y prueba el chorizo verde."
    },
    "michoacán": {
        lugares: "Morelia, Pátzcuaro, Santuario de la Mariposa Monarca",
        evitar: "Algunas carreteras hacia la costa",
        recomendacion: "Prueba las corundas y el ate de Morelia."
    },
    "morelos": {
        lugares: "Tepoztlán, Xochicalco, Grutas de Cacahuamilpa",
        evitar: "Zonas de hiking sin guía",
        recomendacion: "Toma un temazcal y prueba el clemole."
    },
    "nayarit": {
        lugares: "Sayulita, Islas Marietas, Mexcaltitán",
        evitar: "Playas con corrientes peligrosas",
        recomendacion: "Surfea en Sayulita y prueba los pescados zarandeados."
    },
    "nuevo león": {
        lugares: "Grutas de García, Parque Fundidora, Cola de Caballo",
        evitar: "Algunas zonas de Monterrey por la noche y la casa de mich por que ahi matan",
        recomendacion: "Prueba el cabrito y visita el Museo del Acero Horno 3."
    },
    "oaxaca": {
        lugares: "Hierve el Agua, Monte Albán, Puerto Escondido",
        evitar: "Playas con oleaje peligroso",
        recomendacion: "Come mole negro y tlayudas, y visita los talleres de alebrijes."
    },
    "puebla": {
        lugares: "Cholula, Africam Safari, Zacatlán",
        evitar: "Zonas arqueológicas sin protección solar",
        recomendacion: "Prueba el mole poblano y visita la Biblioteca Palafoxiana."
    },
    "querétaro": {
        lugares: "Santiago de Querétaro, Peña de Bernal, Sierra Gorda",
        evitar: "Caminos rurales sin señalización",
        recomendacion: "Visita las misiones franciscanas y prueba las gorditas de maíz quebrado."
    },
    "quintana roo": {
        lugares: "Cancún, Tulum, Isla Mujeres, Cobá",
        evitar: "Playas sin salvavidas",
        recomendacion: "Bucea en el Gran Cenote y prueba el pescado a la tikin-xic."
    },
    "san luis potosí": {
        lugares: "Real de Catorce, Xilitla, Sótano de las Golondrinas",
        evitar: "Zonas desérticas sin agua",
        recomendacion: "Visita el Jardín Surrealista de Edward James y prueba los enchiladas potosinas."
    },
    "sinaloa": {
        lugares: "Mazatlán, Cosalá, Isla de la Piedra",
        evitar: "Zonas no turísticas de Culiacán",
        recomendacion: "Prueba el aguachile y el chilorio, y ve el Carnaval de Mazatlán."
    },
    "sonora": {
        lugares: "Hermosillo, Puerto Peñasco, Álamos",
        evitar: "Desiertos sin preparación",
        recomendacion: "Come carne asada sonorense y visita la Reserva del Pinacate."
    },
    "tabasco": {
        lugares: "Villahermosa, Comalcalco, Pantanos de Centla",
        evitar: "Zonas de humedales sin guía",
        recomendacion: "Prueba el pejelagarto y el chocolate tabasqueño."
    },
    "tamaulipas": {
        lugares: "Tampico, Ciudad Victoria, Playa Miramar",
        evitar: "Frontera con Texas sin precaución",
        recomendacion: "Come mariscos en Tampico y visita el Espacio Cultural Metropolitano."
    },
    "tlaxcala": {
        lugares: "Cacaxtla, Tlaxco, Zoológico de Tlaxcala",
        evitar: "Carreteras secundarias de noche",
        recomendacion: "Prueba el mixiote de carnero y visita los murales de Cacaxtla."
    },
    "veracruz": {
        lugares: "Xalapa, Catemaco, Tajín, Boca del Río",
        evitar: "Zonas costeras en temporada de huracanes",
        recomendacion: "Come picadas veracruzanas y visita el Museo Antropológico de Xalapa."
    },
    "yucatán": {
        lugares: "Mérida, Chichén Itzá, Uxmal, Cenotes",
        evitar: "Zonas arqueológicas sin hidratación",
        recomendacion: "Prueba la cochinita pibil y el queso relleno, y usa repelente de mosquitos."
    },
    "zacatecas": {
        lugares: "Zacatecas capital, Guadalupe, Sombrerete",
        evitar: "Minas abandonadas sin guía",
        recomendacion: "Visita la Mina El Edén y prueba el asado de boda."
    }
};

// Función de búsqueda
document.getElementById('btn-buscar').addEventListener('click', () => {
    const input = document.getElementById('input-estado').value.toLowerCase();
    const resultado = document.getElementById('resultado');

    if (estadosMexico[input]) {
        const estado = estadosMexico[input];
        resultado.innerHTML = `
            <h3>${input.toUpperCase()}</h3>
            <p><strong>🏞️ Lugares para visitar:</strong> ${estado.lugares}</p>
            <p><strong>⚠️ Evitar:</strong> ${estado.evitar}</p>
            <p><strong>💡 Recomendación UANL:</strong> ${estado.recomendacion}</p>
        `;
    } else {
        resultado.innerHTML = "<p>❌ Escribe el estado bien, no seas flojo. (ej: 'Nuevo León', 'Querétaro').</p>";
    }
});