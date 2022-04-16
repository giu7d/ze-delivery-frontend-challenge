import styled, { ThemeProvider } from 'styled-components'
import { BiCart, BiFilterAlt, BiMenuAltLeft, BiSearchAlt } from 'react-icons/bi'

import { GlobalStyle } from '@/styles/global'
import { Theme } from '@/themes'

export function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Main>
          {/* MOBILE NAV */}
          <nav>
            <button className="btn btn--icon">
              <BiMenuAltLeft />
            </button>
            <h2 className="title">Produtos</h2>
            <button className="btn btn--badge">
              <span>3</span>
              <BiCart className="icon" />
            </button>
          </nav>

          {/* FILTER */}
          <section className="filter">
            <div className="search-input">
              <BiSearchAlt className="search-input__icon" />
              <input type="text" placeholder="Buscar" />
            </div>
            <button className="btn btn--icon">
              <BiFilterAlt />
            </button>
          </section>
          {/* Products */}

          <section className="products">
            {Array(10)
              .fill('')
              .map((_el, index) => (
                <div className="product" key={index}>
                  <div className="product__sales">
                    -15<small>%</small>
                  </div>
                  <div className="product__image">
                    <img
                      src="https://via.placeholder.com/300x350"
                      alt="placeholder image"
                    />
                  </div>
                  <div className="product__content">
                    <div className="product__content__content">
                      <div className="product__title">
                        <h4 className="product__title__brand">Brahma</h4>
                        <h5 className="product__title__description">
                          Cerveja duplo malte 250ml
                        </h5>
                      </div>
                      <div className="product__price">
                        <small className="product__price__old">R$ 99.99</small>
                        <span className="product__price__new">
                          R$ 99<small>.99</small>
                        </span>
                      </div>
                    </div>

                    <div className="product__content__actions">
                      <div className="select">
                        <span className="select__label">Escolha um pack</span>
                        <div className="select__options">
                          <button className="btn option">
                            15 <small>un.</small>
                          </button>
                          <button className="btn option option--selected">
                            35 <small>un.</small>
                          </button>
                          <button className="btn option">
                            60 <small>un.</small>
                          </button>
                        </div>
                      </div>

                      <button className="btn btn--secondary">Adicionar</button>
                    </div>
                  </div>
                </div>
              ))}
          </section>
          {/* BOTTOM CART */}
          <section className="cart">
            <button className="btn btn--primary">
              <span>Agendar entrega</span>
              <span className="value">
                <small>R$</small>
                52
                <small>.99</small>
              </span>
            </button>
          </section>
        </Main>
      </ThemeProvider>
    </>
  )
}

const Main = styled.div`
  nav {
    align-items: center;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 100;

    .title {
      color: #242424;
      font-size: 1.5rem;
      font-weight: 600;
      text-transform: capitalize;
    }
  }

  .cart {
    background-color: #ffffff;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    bottom: 0;
    padding: 1rem 1rem 1.5rem;
    position: fixed;
    width: 100%;
    z-index: 100;
  }

  .btn {
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    color: #242424;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    outline: none;
    transition: 100ms opacity ease-out;
    user-select: none;
    border-radius: 1rem;
    overflow: hidden;

    &::-moz-focus-inner {
      border: none;
    }

    &:active {
      opacity: 0.5;
      border-style: none;
    }

    &--primary {
      width: 100%;
      min-height: 3rem;
      background: linear-gradient(
        91.27deg,
        #f07945 0%,
        rgba(240, 121, 69, 0.85) 100%
      );
      box-shadow: 0px 4px 4px rgba(240, 121, 69, 0.1);
      border-radius: 1rem;
      padding: 1rem 2rem;

      font-weight: 600;
      font-size: 1.2rem;
      text-transform: capitalize;

      color: #ffffff;

      justify-content: space-between;

      .value {
        font-size: 1.5rem;
        small {
          font-size: 1rem;
        }
      }
    }

    &--secondary {
      width: 100%;
      min-height: 3rem;
      background: linear-gradient(
        133.91deg,
        rgba(36, 36, 36, 0.1) -0.47%,
        rgba(36, 36, 36, 0.05) 99.53%
      );

      border-radius: 1rem;
      padding: 0.5rem 1rem;

      font-weight: 600;
      font-size: 1.2rem;
      text-transform: capitalize;

      color: rgba(36, 36, 36, 0.75);
    }

    &--icon {
      min-height: 3rem;
      min-width: 3rem;
    }

    &--badge {
      background: hsla(0, 0%, 0%, 0.05);
      font-weight: 500;
      font-size: 1rem;
      color: #242424;
      justify-content: center;
      align-items: center;
      padding: 0.5rem 1rem;
      min-height: auto;
      gap: 0.25rem;
      border-radius: 10rem;

      .icon {
        font-size: 1rem;
      }
    }
  }

  .filter {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding: 1rem;
  }

  input {
    border: none;
    width: 100%;
    font-size: 1rem;
  }

  .search-input {
    display: flex;

    height: 3rem;
    width: 100%;
    gap: 0.5rem;
    padding: 0 1rem;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 10rem;
    overflow: hidden;
    transition: 200ms border-color ease-out;

    &__icon {
      height: 100%;
      font-size: 1.5rem;
    }

    &:focus-within {
      border-color: #f07945;
    }
  }

  .products {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  .product {
    background: #ffffff;
    border-radius: 1rem;
    /* box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05); */
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding: 1rem 0;
    width: 100%;

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;

      &__content {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      &__actions {
        padding-top: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    }

    &__sales {
      align-items: flex-end;
      align-self: flex-start;
      background: #f07945;
      border-radius: 1rem 0.1rem;
      color: #ffffff;
      display: flex;
      font-size: 1rem;
      font-weight: 700;
      gap: 0.1rem;
      line-height: 1rem;
      padding: 0.75rem 1rem;
      position: absolute;
      text-transform: capitalize;

      small {
        font-size: 0.75rem;
      }
    }

    &__image {
      display: flex;
      background: rgba(0, 0, 0, 0.05);
      border-radius: 1rem;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      min-width: 35%;

      img {
        max-height: 150px;
      }
    }

    &__title {
      display: flex;
      flex-direction: column;

      &__brand {
        font-weight: 600;
        font-size: 1rem;
        text-transform: capitalize;
        color: #242424;
      }

      &__description {
        font-weight: 500;
        font-size: 1rem;
        text-transform: capitalize;
        color: #242424;
      }
    }

    &__price {
      display: flex;
      flex-direction: column;

      &__old {
        font-weight: 700;
        font-size: 1rem;
        color: rgba(36, 36, 36, 0.25);
        text-decoration-line: line-through;
      }

      &__new {
        font-weight: 700;
        font-size: 1.25rem;
        color: rgba(240, 121, 69, 0.85);
      }
    }
  }

  .select {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    &__label {
      font-size: 0.75rem;
      text-transform: uppercase;
      color: rgba(36, 36, 36, 0.75);
    }

    &__options {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

    & .option {
      flex-direction: column;
      padding: 0.75rem;
      aspect-ratio: 1/1;
      border: 1px solid rgba(36, 36, 36, 0.1);
      border-radius: 1rem;

      font-weight: 600;
      font-size: 1.2rem;
      text-transform: capitalize;

      color: rgba(36, 36, 36, 0.75);

      &--selected {
        border-color: transparent;
        color: #ffffff;
        background: linear-gradient(
          133.91deg,
          #f07945 -0.47%,
          rgba(240, 121, 69, 0.85) 99.53%
        );
      }

      small {
        font-size: 0.8rem;
        font-weight: 500;
      }
    }
  }
`
