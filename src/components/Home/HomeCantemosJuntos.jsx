import React, { useEffect, useState } from "react";
import { getInfoHome } from "../../api/api";

const HomeCantemosJuntos = () => {
  const [dataHome, setDataHome] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await getInfoHome();
        if (isMounted) {
          setDataHome(response?.data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "Error al cargar los datos");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading) {
    return <div className='loading'>Cargando...</div>;
  }

  if (error) {
    return <div className='error'>{error}</div>;
  }

  return (
    <div className='home_header'>
      <div className='home_header_container container_all'>
        <div className='home_header_container_one'>
          <div className='title'>
            <h3>{dataHome.texto_BIENVENIDA}</h3>
            <h2>¡CANTEMOS JUNTOS!</h2>
          </div>
          <div className='contenTexts'>
            <div className='anim'>
              <div className='contenTextTwo'>
                <div className='welcomeTextTwo'>
                  <h5>{dataHome.texto_BIENVENIDA_2}</h5>
                  <img src='assets/dino.png' alt='' />
                  <a className='link' href='https://cantirondas.com/tucancion.cantirondas.com/'>
                    IR A MÚSICA PERSONALIZADA
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCantemosJuntos;
