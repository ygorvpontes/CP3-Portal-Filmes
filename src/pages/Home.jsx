import { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import MovieCard from "../components/MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
    const [filmesPopulares, setFilmesPopulares] = useState([]);
    const [filmesTrending, setFilmesTrending] = useState([]);
    const [filmesUpcoming, setFilmesUpcoming] = useState([]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
            { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
        ],
    };

    const fetchMovies = async () => {
        try {
            const [respostaPopulares, respostaTrending, respostaUpcoming] = await Promise.all([
                fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br`),
                fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br`),
                fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br`),
            ]);

            const popularData = await respostaPopulares.json();
            const trendingData = await respostaTrending.json();
            const upcomingData = await respostaUpcoming.json();

            setFilmesPopulares(popularData.results);
            setFilmesTrending(trendingData.results);
            setFilmesUpcoming(upcomingData.results);
        } catch (error) {
            console.error("Erro ao buscar filmes:", error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <main className="bg-background text-textPrimary min-h-screen p-8">
            <section className="text-center mb-8">
                <h1 className="text-3xl font-extrabold mb-2">Bem-vindo ao Portal Filmes</h1>
                <p className="text-secondary mb-4">Descubra filmes populares, de tendência e muito mais!</p>
                <input 
                    type="email" 
                    placeholder="Digite seu e-mail para novidades" 
                    className="px-4 py-2 rounded-md text-background"
                />
                <button className="ml-4 bg-primary px-4 py-2 rounded-md text-white">Cadastrar</button>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Filmes Populares</h2>
                <Slider {...settings}>
                    {filmesPopulares.map((filme) => (
                        <MovieCard key={filme.id} movie={filme} />
                    ))}
                </Slider>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Tendências</h2>
                <Slider {...settings}>
                    {filmesTrending.map((filme) => (
                        <MovieCard key={filme.id} movie={filme} />
                    ))}
                </Slider>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Próximos Lançamentos</h2>
                <Slider {...settings}>
                    {filmesUpcoming.map((filme) => (
                        <MovieCard key={filme.id} movie={filme} />
                    ))}
                </Slider>
            </section>
        </main>
    );
}

