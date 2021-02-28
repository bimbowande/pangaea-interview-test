import gql from "graphql-tag";


export const GetAllCurrency = gql`
  {
    currency
  }
`;


export const FilterByCurrency =(currency:String) =>  gql`
    {
        products{
            id
            title
            image_url
            price(currency:${currency})
            product_options{
                title
                 options{
                    value
                }
            }
        },
        currency
    }
`;