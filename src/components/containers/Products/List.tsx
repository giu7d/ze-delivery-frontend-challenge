import { BiFilterAlt, BiSearchAlt } from 'react-icons/bi'

import { Input, InputArea } from '@/components/partials/Inputs'
import { ProductCard } from '@/components/fragments/Product/Card'
import { ProductPackSelection } from '@/components/fragments/Product/PackSelection'
import { IconButton, TextButton } from '@/components/partials/Buttons'
import { FilterSection, ProductsSection } from '@/components/partials/Sections'
import { ProductCheckout } from '@/components/fragments/Product/Checkout'

export function ProductsList() {
  return (
    <>
      <FilterSection>
        <InputArea>
          <BiSearchAlt className="icon" />
          <Input type="text" placeholder="Buscar" />
        </InputArea>
        <IconButton>
          <BiFilterAlt />
        </IconButton>
      </FilterSection>
      <ProductsSection>
        {Array(10)
          .fill('')
          .map((_el, index) => (
            <ProductCard
              key={index}
              brand="Brahma"
              description="Cerveja duplo malte 250ml"
              oldPrice={100}
              currentPrice={99.99}
              renderImage={
                <img
                  src="https://via.placeholder.com/300x350"
                  alt="placeholder image"
                />
              }
              renderActions={
                <>
                  <ProductPackSelection
                    label="Escolha um pack"
                    items={[
                      { id: '0', value: '15', mesurementUnit: 'un' },
                      { id: '1', value: '35', mesurementUnit: 'un' },
                      { id: '2', value: '65', mesurementUnit: 'un' }
                    ]}
                    selectedItem={{
                      id: '1',
                      value: '35',
                      mesurementUnit: 'un'
                    }}
                  />
                  <TextButton>Adicionar</TextButton>
                </>
              }
            />
          ))}
      </ProductsSection>
      <ProductCheckout />
    </>
  )
}
