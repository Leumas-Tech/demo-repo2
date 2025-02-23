const { SDK, Auth, Metadata } = require("@infura/sdk"); // Assuming Metadata is part of the SDK

require("dotenv").config();

const auth = new Auth({
  projectId: process.env.INFURA_API_KEY,
  secretId: process.env.INFURA_API_KEY_SECRET,
  privateKey: process.env.WALLET_PRIVATE_KEY,
  chainId: 1,
});

const sdk = new SDK(auth);

const getCollectionsByWallet = async (options) => {
  return sdk.api.getCollectionsByWallet(options);
};

const getContractMetadata = async (options) => {
  return sdk.api.getContractMetadata(options);
};

const getLowestTradePrice = async (options) => {
  return sdk.api.getLowestTradePrice(options);
};

const getNFTs = async (options) => {
  return sdk.api.getNFTs(options);
};

const getNFTsForCollection = async (options) => {
  return sdk.api.getNFTsForCollection(options);
};

const getNftsTransfersByWallet = async (options) => {
  return sdk.api.getNftsTransfersByWallet(options);
};

const getOwnersbyContractAddress = async (options) => {
  return sdk.api.getOwnersbyContractAddress(options);
};

const getOwnersbyTokenAddressAndTokenId = async (options) => {
  return sdk.api.getOwnersbyTokenAddressAndTokenId(options);
};

const getTransferFromBlockToBlock = async (options) => {
  return sdk.api.getTransferFromBlockToBlock(options);
};

const getTransfersByBlockHash = async (options) => {
  return sdk.api.getTransfersByBlockHash(options);
};

const getTransfersByBlockNumber = async (options) => {
  return sdk.api.getTransfersByBlockNumber(options);
};

const getTransfersByContractAddress = async (options) => {
  return sdk.api.getTransfersByContractAddress(options);
};

const getTransfersByTokenId = async (options) => {
  return sdk.api.getTransfersByTokenId(options);
};

const searchNfts = async (options) => {
  return sdk.api.searchNfts(options);
};



const deployERC721Mintable = async (options) => {
    return sdk.deploy({
      template: TEMPLATES.ERC721Mintable,
      params: options
    });
  };
  
  const deployERC721UserMintable = async (options) => {
    return sdk.deploy({
      template: TEMPLATES.ERC721UserMintable,
      params: options
    });
  };
  
  const deployERC1155Mintable = async (options) => {
    return sdk.deploy({
      template: TEMPLATES.ERC1155Mintable,
      params: options
    });
  };
  
  const getGasPrice = async () => {
    return sdk.getGasPrice();
  };
  
  const getSigner = () => {
    return auth.getSigner();
  };
  
  const getStatus = async (options) => {
    return sdk.getStatus(options);
  };
  
  const loadERC721Mintable = async (options) => {
    return sdk.loadContract({
      template: TEMPLATES.ERC721Mintable,
      contractAddress: options.contractAddress
    });
  };
  
  







  const storeFolder = async (metadataArray) => {
    try {
      const result = await sdk.createFolder(metadataArray, true);
      return result;
    } catch (error) {
      console.error("Error storing folder:", error);
      throw error;
    }
  };
  
  const storeFile = async (filePath) => {
    try {
      const result = await sdk.storeFile(filePath);
      return result;
    } catch (error) {
      console.error("Error storing file:", error);
      throw error;
    }
  };
  
  const storeMetadataFunction = async (metadata) => {
    try {
      const result = await sdk.storeMetadata({ metadata });
      return result;
    } catch (error) {
      console.error("Error storing metadata:", error);
      throw error;
    }
  };










  const freeLevelMetadataFunction = async (metadata) => {
    try {
      const result = Metadata.freeLevelMetadata(metadata);
      return result;
    } catch (error) {
      console.error("Error getting free level metadata:", error);
      throw error;
    }
  };
  
  const openSeaCollectionMetadataFunction = async (metadata, imageUrl) => {
    try {
      const imageResult = await sdk.storeFile(imageUrl);
      metadata.image = imageResult;
      const collectionMetadataResult = Metadata.openSeaCollectionLevelStandard(metadata);
      const storeResult = await sdk.storeMetadata({ metadata: collectionMetadataResult });
      return storeResult;
    } catch (error) {
      console.error("Error getting OpenSea collection metadata:", error);
      throw error;
    }
  };
  
  const openSeaTokenMetadataFunction = async (metadata, imageUrl) => {
    try {
      const imageResult = await sdk.storeFile(imageUrl);
      metadata.image = imageResult;
      const tokenMetadataResult = Metadata.openSeaTokenLevelStandard(metadata);
      return tokenMetadataResult;
    } catch (error) {
      console.error("Error getting OpenSea token metadata:", error);
      throw error;
    }
  };














  const addAdminToContract = async (contract, publicAddress) => {
    try {
      const result = await contract.addAdmin({ publicAddress });
      console.log("new admin:", result);
      return result;
    } catch (error) {
      console.error("Error adding admin:", error);
      throw error;
    }
  };
  
  const addMinterToContract = async (contract, publicAddress, gas) => {
    try {
      const result = await contract.accessControl.addMinter({ publicAddress, gas });
      console.log("new minter:", result);
      return result;
    } catch (error) {
      console.error("Error adding minter:", error);
      throw error;
    }
  };
  
  const checkAdminStatus = async (contract, publicAddress) => {
    try {
      const isAdmin = await contract.accessControl.isAdmin({ publicAddress });
      console.log(isAdmin);
      return isAdmin;
    } catch (error) {
      console.error("Error checking admin status:", error);
      throw error;
    }
  };
  
  const checkMinterStatus = async (contract, publicAddress) => {
    try {
      const isMinter = await contract.accessControl.isMinter({ publicAddress });
      console.log(isMinter);
      return isMinter;
    } catch (error) {
      console.error("Error checking minter status:", error);
      throw error;
    }
  };
  
  const removeAdminFromContract = async (contract, publicAddress) => {
    try {
      const result = await contract.accessControl.removeAdmin({ publicAddress });
      console.log(result);
      return result;
    } catch (error) {
      console.error("Error removing admin:", error);
      throw error;
    }
  };
  
  const removeMinterFromContract = async (contract, publicAddress) => {
    try {
      const result = await contract.accessControl.removeMinter({ publicAddress });
      console.log(result);
      return result;
    } catch (error) {
      console.error("Error removing minter:", error);
      throw error;
    }
  };
  
  const renounceAdminRights = async (contract, publicAddress) => {
    try {
      const result = await contract.accessControl.renounceAdmin({ publicAddress });
      console.log(result);
      return result;
    } catch (error) {
      console.error("Error renouncing admin rights:", error);
      throw error;
    }
  };
  
  const renounceOwnershipOfContract = async (contract, contractAddress) => {
    try {
      const result = await contract.accessControl.renounceOwnership({ contractAddress });
      console.log(result);
      return result;
    } catch (error) {
      console.error("Error renouncing contract ownership:", error);
      throw error;
    }
  };
  

  









  const approveTransferForToken = async (contract, toAddress, tokenId) => {
    try {
      const txApprove = await contract.approveTransfer({
        to: toAddress,
        tokenId,
      });
      await txApprove.wait();
      console.log(txApprove);
      return txApprove;
    } catch (error) {
      console.error("Error approving transfer:", error);
      throw error;
    }
  };
  
  const setApprovalForAllTokens = async (contract, toAddress, approvalStatus) => {
    try {
      const setApproval = await contract.setApprovalForAll({
        to: toAddress,
        approvalStatus,
      });
      const approvalSet = await setApproval.wait();
      console.log(approvalSet);
      return approvalSet;
    } catch (error) {
      console.error("Error setting approval for all tokens:", error);
      throw error;
    }
  };
  
  const updateContractURI = async (contract, contractAddress, newContractURI) => {
    try {
      const contractURI = await contract.setContractURI({
        contractAddress,
        contractURI: newContractURI,
      });
      console.log(contractURI);
      return contractURI;
    } catch (error) {
      console.error("Error updating contract URI:", error);
      throw error;
    }
  };
  
  const transferToken = async (contract, fromAddress, toAddress, tokenId) => {
    try {
      const txTransfer = await contract.transfer({
        from: fromAddress,
        to: toAddress,
        tokenId,
      });
      const receipt = await txTransfer.wait();
      console.log(receipt);
      return receipt;
    } catch (error) {
      console.error("Error transferring token:", error);
      throw error;
    }
  };
  

  const addTokenIDsToContract = async (contract, ids) => {
    try {
      const tx = await contract.addIds({ ids });
      return tx;
    } catch (error) {
      console.error("Error adding IDs:", error);
      throw error;
    }
  };
  
  const mintToken = async (contract, toAddress, id, quantity, gasLimit) => {
    try {
      const mint = await contract.mint({
        to: toAddress,
        id,
        quantity,
        gas: gasLimit,
      });
      const minted = await mint.wait();
      console.log(minted);
      return minted;
    } catch (error) {
      console.error("Error minting token:", error);
      throw error;
    }
  };
  
  const mintBatchTokens = async (contract, toAddress, ids, quantities, gasLimit) => {
    try {
      const mintBatch = await contract.mintBatch({
        to: toAddress,
        id: ids,
        quantity: quantities,
        gas: gasLimit,
      });
      const minted = await mintBatch.wait();
      console.log(minted);
      return minted;
    } catch (error) {
      console.error("Error minting batch of tokens:", error);
      throw error;
    }
  };
  
  const setTokenApproval = async (contract, toAddress, approvalStatus, gasLimit) => {
    try {
      const setApproval = await contract.setApprovalForAll({
        to: toAddress,
        approvalStatus,
        gas: gasLimit,
      });
      const approvalSet = await setApproval.wait();
      console.log(approvalSet);
      return approvalSet;
    } catch (error) {
      console.error("Error setting token approval:", error);
      throw error;
    }
  };
  
  const defineBaseURI = async (sdkInstance, newBaseURI, gasLimit) => {
    try {
      const baseURI = await sdkInstance.setBaseURI({
        baseURI: newBaseURI,
        gas: gasLimit,
      });
      console.log(baseURI);
      return baseURI;
    } catch (error) {
      console.error("Error defining base URI:", error);
      throw error;
    }
  };
  
  const transferTokens = async (contract, fromAddress, toAddress, tokenId, quantity, gasLimit) => {
    try {
      const txTransfer = await contract.transfer({
        from: fromAddress,
        to: toAddress,
        tokenId,
        quantity,
        gas: gasLimit,
      });
      const receipt = await txTransfer.wait();
      console.log(receipt);
      return receipt;
    } catch (error) {
      console.error("Error transferring tokens:", error);
      throw error;
    }
  };
  
  const transferBatchTokens = async (contract, fromAddress, toAddress, tokenIds, quantities, gasLimit) => {
    try {
      const txTransferBatch = await contract.transferBatch({
        from: fromAddress,
        to: toAddress,
        tokenId: tokenIds,
        quantity: quantities,
        gas: gasLimit,
      });
      const receipt = await txTransferBatch.wait();
      console.log(receipt);
      return receipt;
    } catch (error) {
      console.error("Error transferring batch of tokens:", error);
      throw error;
    }
  };
  


  


// Function to mint token with publicAddress and tokenURI
const mintTokenWithURI = async (contract, publicAddress, tokenURI) => {
    try {
      const mint = await contract.mint({
        publicAddress,
        tokenURI
      });
      const minted = await mint.wait();
      console.log(minted);
      return minted;
    } catch (error) {
      console.error("Error minting token with URI:", error);
      throw error;
    }
  };
  
  // Function to mint token with quantity and cost
  const mintTokenWithQuantityAndCost = async (contract, quantity, cost) => {
    try {
      const mint = await contract.mint({
        quantity,
        cost
      });
      const minted = await mint.wait();
      console.log(minted);
      return minted;
    } catch (error) {
      console.error("Error minting token with quantity and cost:", error);
      throw error;
    }
  };
  

  






  const getPrice = async (sdk) => {
    try {
      const price = await sdk.price();
      console.log(price);
      return price;
    } catch (error) {
      console.error("Error fetching price:", error);
      throw error;
    }
  };
  
  const reserveTokens = async (sdk, quantity) => {
    try {
      const reserve = await sdk.reserve({ quantity });
      console.log(reserve);
      return reserve;
    } catch (error) {
      console.error("Error reserving tokens:", error);
      throw error;
    }
  };
  
  const revealBaseURI = async (sdk, baseURI) => {
    try {
      const reveal = await sdk.reveal({ baseURI });
      console.log(reveal);
      return reveal;
    } catch (error) {
      console.error("Error revealing base URI:", error);
      throw error;
    }
  };
  
  const setSDKBaseURI = async (sdk, baseURI) => {
    try {
      const result = await sdk.setBaseURI({ baseURI });
      console.log(result);
      return result;
    } catch (error) {
      console.error("Error setting base URI:", error);
      throw error;
    }
  };
  
  const setSDKPrice = async (sdk, priceValue) => {
    try {
      const price = await sdk.setPrice({ price: priceValue });
      console.log(price);
      return price;
    } catch (error) {
      console.error("Error setting price:", error);
      throw error;
    }
  };
  
  const toggleSales = async (sdk) => {
    try {
      const sales = await sdk.toggleSale();
      console.log(sales);
      return sales;
    } catch (error) {
      console.error("Error toggling sales:", error);
      throw error;
    }
  };
  
  const withdrawFunds = async (sdk) => {
    try {
      const withdraw = await sdk.withdraw();
      console.log(withdraw);
      return withdraw;
    } catch (error) {
      console.error("Error withdrawing:", error);
      throw error;
    }
  };
  
  const getRoyaltyInfo = async (contract, tokenId, sellPrice) => {
    try {
      const infos = await contract.royaltyInfo({ tokenId, sellPrice });
      console.log(infos);
      return infos;
    } catch (error) {
      console.error("Error getting royalty info:", error);
      throw error;
    }
  };
  
  const setRoyalties = async (contract, publicAddress, fee) => {
    try {
      const royalties = await contract.setRoyalties({ publicAddress, fee });
      const royaltiesSet = await royalties.wait();
      console.log(royaltiesSet);
      return royaltiesSet;
    } catch (error) {
      console.error("Error setting royalties:", error);
      throw error;
    }
  };
  

  





//   You can always create more functions one of the foillowing ways 

// New function chaining functions together

// New Function where these functions call a webhook

// New Function with javascript code 

// When you make the frontend request one of these functions you can create more for almost anything, for additional and more custom processing as needed. We have ultimate control down to the pizel here




module.exports = {
  getCollectionsByWallet,
  getContractMetadata,
  getLowestTradePrice,
  getNFTs,
  getNFTsForCollection,
  getNftsTransfersByWallet,
  getOwnersbyContractAddress,
  getOwnersbyTokenAddressAndTokenId,
  getTransferFromBlockToBlock,
  getTransfersByBlockHash,
  getTransfersByBlockNumber,
  getTransfersByContractAddress,
  getTransfersByTokenId,
  searchNfts,

  deployERC721Mintable,
  deployERC721UserMintable,
  deployERC1155Mintable,
  getGasPrice,
  getSigner,
  getStatus,
  loadERC721Mintable,

  storeFolder,
  storeFile,
  storeMetadataFunction,

  freeLevelMetadataFunction,
  openSeaCollectionMetadataFunction,
  openSeaTokenMetadataFunction,

  addAdminToContract,
  addMinterToContract,
  checkAdminStatus,
  checkMinterStatus,
  removeAdminFromContract,
  removeMinterFromContract,
  renounceAdminRights,
  renounceOwnershipOfContract,

  approveTransferForToken,
  setApprovalForAllTokens,
  updateContractURI,
  transferToken,

  getPrice,
  reserveTokens,
  revealBaseURI,
  setSDKBaseURI,
  setSDKPrice,
  toggleSales,
  withdrawFunds,
  getRoyaltyInfo,
  setRoyalties,
  mintTokenWithURI,
  mintTokenWithQuantityAndCost,
  addTokenIDsToContract,
  mintToken,
  mintBatchTokens,
  setTokenApproval,
  defineBaseURI,
  transferTokens,
  transferBatchTokens,
};
