
const stocks = [
        {
            id: 1,
            categoria: "accesorios",
            subcategoria: "cobertor",
            marca_producto: "UV-4",
            descripcion: "cubre tanque",
            marca_motos: ["yamaha", "honda"],
            tamanio:{
                ancho: 50,
                largo: 100
                
                
            },
            stock:{
                cantidad: 13,
                color: "Blanco"
                
            },
            precio: 400
        },
        {
            id: 2,
            categoria: "ruedas",
            subcategoria: "camaras",
            marca_producto: "desconocida",
            descripcion: "camaras comunes",
            marca_motos: ["110"],
            tamanio:{
                ancho: 50,
                largo: 100
                
                
            },
            stock:{
                cantidad: 20
                
            },
            precio: 250
        },
        {
            id: 3,
            categoria: "accesorios",
            subcategoria: "cascos",
            marca_producto: "h4",
            descripcion: "casco reforzado",
            tamanio:{
                medida: "XL"
                
                
            },
            stock:{
                cantidad: 1,
                color: "Blanco"
                
            },
            precio: 450
        },
        {
            id: 4,
            categoria: "accesorios",
            subcategoria: "cascos",
            marca_producto: "h4",
            descripcion: "casco reforzado",
            tamanio:{
                medida: "M"
                
                
            },
            stock:{
                cantidad: 4,
                color: "Rosado"
                
            },
            precio: 450
        }
        

]


module.exports= stocks;