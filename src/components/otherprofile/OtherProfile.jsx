import "./OtherProfile.css"; 
import React from 'react';

const OtherProfile = () => {
  return (
    <div className="container mx-auto my-5 p-5">
      <div className="md:flex no-wrap md:-mx-2">
        {/* Lado esquerdo */}
        <div className="w-full md:w-3/12 md:mx-2">
          <div className="bg-white p-3 border-t-4 border-orange-500">
            <div className="image overflow-hidden">
              <img
                id="other-profile-image"
                className="h-auto w-full mx-auto"
                src="src/images/default-julia.png"
                alt=""
              />
            </div>
            <h1
              id="other-name"
              className="text-gray-900 font-medium text-xl leading-8 my-1"
            >
              Jujucs
            </h1>
            <p
              id="other-caption"
              className="text-sm text-gray-500 hover:text-gray-600 leading-6 font-regular"
            >
              Sem legenda
            </p>
            <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
              <li className="flex items-center py-3 font-regular">
                <span>Nível</span>
                <span className="ml-auto">
                  <span className="bg-orange-500 py-1 px-2 rounded text-white text-sm">
                    Novato
                  </span>
                </span>
              </li>
              <li className="flex items-center py-3 font-regular">
                <span>Membro desde</span>
                <span id="other-created-at" className="ml-auto">
                  18 de junho de 2024
                </span>
              </li>
              <li>
              <Link to="/profile">
                  <span className="bg-orange-500 py-1 px-2 rounded text-white text-sm">
                    Alterar perfil
                  </span>
                  </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-9/12 mx-2 h-64">
          {/* Sobre */}
          <div className="bg-white p-3 shadow-sm rounded-sm">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
              <svg
                className="h-5 stroke-current text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="tracking-wide text-orange-500 font-bold">Sobre</span>
            </div>
            <div className="text-gray-700">
              <div className="grid md:grid-cols-2 text-sm">
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-medium">Nome completo</div>
                  <div id="other-about-name" className="px-4 py-2 font-regular">
                    Julia Emilia de Castro
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-medium">Gênero</div>
                  <div id="other-about-gender" className="px-4 py-2 font-regular">
                    Feminino
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-medium">Localização atual</div>
                  <div id="other-about-location" className="px-4 py-2 font-regular">
                    São Paulo, SP
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-medium">Email</div>
                  <div className="px-4 py-2 font-regular">
                    <a
                      id="other-about-email"
                      className="text-orange-500"
                      href="mailto:juliacastro@mail.com"
                    >
                      juliacastro@mail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Receitas */}
          <div className="my-4"></div>
          <div className="bg-white p-3 shadow-sm rounded-sm">
            <div className="grid grid-cols-1">
              <div>
                <div className="flex items-center font-semibold text-gray-900 leading-8 mb-3">
                  <svg
                    className="h-5 stroke-current text-orange-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="tracking-wide text-orange-500 ml-2 font-bold">Receitas</span>
                </div>
                <a href="feijao-tropeiro.html">
                  <img src="src/images/foto-feijao.png" alt="Feijão Tropeiro" />
                </a>
                <div
                  id="other-posts"
                  className="grid grid-cols-1 md:grid-cols-3 gap-3"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherProfile;
