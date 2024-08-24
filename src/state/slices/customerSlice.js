// src/slices/customerSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      identification: {
        companyName: "Company Name Example",
        ownerName: "John Doe",
        taxId: "123-45-6789",
        commercialName: "Doe Enterprises Inc.",
        phoneNumber: "(555) 123-4567",
        clientNo: "CL987654321",
        mobilePhoneNumber: "(555) 987-6543",
        lead: "Marketing Lead - Jane Smith",
        emailMkt: "marketing@doeenterprises.fake",
        address: "123 Elm Street, Suite 400, Springfield, IL",
        emailComercial: "sales@doeenterprises.fake",
        postalCode: "62701",
        transportationZone: "Zone 3",
        local: "Springfield",
        channel: "KS | Kitchen | Kitchen Studio",
        district: "Central Business District",
        website: "www.doeenterprises.fake",
        territory: "Midwest",
        instagram: "@doeenterprises",
        regionNut: "NUTS 2 - Illinois",
        linkedin: "linkedin.com/company/doeenterprises",
      },
      sales: {
        payments: {
          paymentTerm: "30 days",
          requiredCredit: "30,000€",
          approvedCredit: "20,000€",
        },
        discounts: [
          { channel: "Canal Kitchen Studio", discount: "42% | 5%" },
          { channel: "Obra Kitchen Studio", discount: "12% | 15%" },
        ],
      },
      contacts: [
        {
          name: "John Doe",
          role: "CEO",
          email: "john.doe@doeenterprises.com",
          phoneNumber: "(555) 123-4567",
          mobileNumber: "(555) 987-6543",
          linkedin: "linkedin.com/in/johndoe",
          birthday: "02/14/1978",
        },
        {
          name: "Emily Johnson",
          role: "CFO",
          email: "emily.johnson@doeenterprises.com",
          phoneNumber: "(555) 234-5678",
          mobileNumber: "(555) 876-5432",
          linkedin: "linkedin.com/in/emilyjohnson",
          birthday: "06/21/1982",
        },
        // ...
      ],
      constructions: [
        {
          name: "Sunset Towers Construction Project",
          mktEmail: "sunsettowers.marketing@doeenterprises.com",
          comercialEmail: "sunsettowers.commercial@doeenterprises.com",
          zone: "West Coast",
          owner: "Michael Lawson",
          ownerNumber: "(555) 345-6789",
          enterprise: "Doe Enterprises Inc.",
          builder: "West Coast Builders Ltd.",
          arquitect: "Anderson & Partners Architecture",
          proposalRequest:
            "Initial design and cost estimate for a 30-story residential building",
          city: "San Francisco",
          brand: "Sunset Residences",
          fractions: "20% residential, 80% commercial",
          piecesNumber: "150 residential units, 30 commercial spaces",
          value: "$25,000,000",
          averageSetValue: "$200,000 per residential unit",
          averagePieceValue: "$800,000 per commercial space",
          site: "www.fake-website.com",
          proposal: "To be reviewed by the board in Q3 2024",
          constructionCompletion: "Expected by Q4 2025",
          constructionForeman: "Richard Bennett",
          oversight: "Thomas Greene & Associates",
          warranty: "10-year structural warranty",
          assembly: "Modular construction with on-site assembly",
        },
        // ...
      ],
    },
    {
      identification: {
        companyName: "Smith Holdings Ltd.",
        ownerName: "Jane Smith",
      },
    },
    {
      identification: {
        companyName: "BrightStar Innovations",
        ownerName: "Michael Johnson",
      },
    },
  ],
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      state.data.push(action.payload);
    },
    deleteCustomer: (state, action) => {
      state.data = state.data.filter(
        (customer) =>
          customer.identification.companyName !== action.payload.companyName
      );
    },
    updateCustomer: (state, action) => {
      const { companyName, updatedCustomer } = action.payload;
      const customer = state.data.find(
        (c) => c.identification.companyName === companyName
      );
      Object.assign(customer.identification, updatedCustomer);
    },

    //
    //
    //
    // S A L E S
    updateSales: (state, action) => {
      const { companyName, updatedSale, key } = action.payload;
      const customer = state.data.find(
        (c) => c.identification.companyName === companyName
      );

      if (customer && customer.sales) {
        if (Array.isArray(customer.sales[key])) {
          // HANDLE AS ARRAY
          customer.sales[key] = updatedSale;
        } else {
          // HANDLE AS OBJECT
          customer.sales[key] = updatedSale;
        }
      }
    },

    //
    //
    //
    // C O N T A C T S
    addContact(state, action) {
      const { companyName, contact } = action.payload;
      const customer = state.customers.find(
        (c) => c.identification.companyName === companyName
      );
      if (customer) {
        customer.contacts.push(contact);
      }
    },
    updateContact(state, action) {
      const { companyName, updatedContact } = action.payload;
      const customer = state.data.find(
        (c) => c.identification.companyName === companyName
      );

      if (customer) {
        const contact = customer.contacts.find(
          (contact) => contact.name === updatedContact.name
        );

        if (contact) {
          Object.assign(contact, updatedContact);
        }
      }
    },
    deleteContact(state, action) {
      const { companyName, contactName } = action.payload;
      const customer = state.data.find(
        (c) => c.identification.companyName === companyName
      );
      if (customer) {
        customer.contacts = customer.contacts.filter(
          (contact) => contact.name !== contactName
        );
      }
    },
  },
  //
  //
  //
  // C O N S T R U C T I O N S
  updateConstruction: (state, action) => {
    const { companyName, updatedConstruction } = action.payload;
    const customer = state.data.find(
      (c) => c.identification.companyName === companyName
    );

    if (customer) {
      const constructionIndex = customer.constructions.findIndex(
        (construction) => construction.name === updatedConstruction.name
      );

      if (constructionIndex !== -1) {
        customer.constructions[constructionIndex] = {
          ...customer.constructions[constructionIndex],
          ...updatedConstruction,
        };
      }
    }
  },
});

// GET CUSTOMER BY ID
// In customerSlice.js or equivalent file
export const selectCustomerByName = (state, companyName) =>
  state.customer.data.find(
    (customer) =>
      customer.identification.companyName.toLowerCase() ===
      companyName.toLowerCase()
  );

export const {
  addCustomer,
  deleteCustomer,
  updateCustomer,
  updateSales,
  addContact,
  updateContact,
  deleteContact,
  updateConstruction,
} = customerSlice.actions;

export default customerSlice.reducer;
