import React from 'react';
import Web3 from 'web3';

const Onchain = () => {
    const handleCoin = async () => {
        
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);

            try {
                await window.ethereum.enable();
                const accounts = await web3.eth.getAccounts();
                const userAccount = accounts[0];
            
                console.log('User account:', userAccount);
            
                if (!web3.utils.isAddress(userAccount)) {
                    alert('Địa chỉ tài khoản MetaMask không hợp lệ.');
                    return;
                }
            
                const amountToSend = web3.utils.toWei('1', 'ether');
                console.log('Amount to send:', amountToSend);
            
                const transaction = await web3.eth.sendTransaction({
                    to: userAccount,
                    value: amountToSend,
                });
            
                console.log('Transaction successful:', transaction);
            } catch (error) {
                console.error('Transaction error:', error);
                alert('Có lỗi xảy ra trong quá trình xử lý giao dịch. Xem console để biết chi tiết lỗi.');
            }
            
        } else {
            alert('Vui lòng cài đặt và kết nối MetaMask để sử dụng tính năng này.');
        }
    };

    return (
        <div>
            <label>coin</label>
            <input type='text' />
            <button type='submit' onClick={handleCoin}>
                add
            </button>
        </div>
    );
};

export default Onchain;
