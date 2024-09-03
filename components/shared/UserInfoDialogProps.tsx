import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface UserInfoDialogProps {
    isOpen: boolean;
    onClose: () => void;
    status: string;
    onSubmit: () => void; // Add onSubmit prop
}

const UserInfoDialog: React.FC<UserInfoDialogProps> = ({ isOpen, onClose, status, onSubmit }) => {
    const [userInfo, setUserInfo] = useState({
        weight: '',
        height: '',
        age: '',
        name: '',
        allergyHistory: '',
        purpose: '',
        description: ''
    });

    console.log(userInfo);
    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUserInfo(prevState => ({ ...prevState, [name]: value }));
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose} >
            <DialogContent className='bg-white'>
                <DialogHeader>
                    <DialogTitle>User Information</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                    <Input 
                        name="weight" 
                        placeholder="Weight" 
                        value={userInfo.weight} 
                        onChange={handleChange} 
                    />
                    <Input 
                        name="height" 
                        placeholder="Height" 
                        value={userInfo.height} 
                        onChange={handleChange} 
                    />
                    <Input 
                        name="age" 
                        placeholder="Age" 
                        value={userInfo.age} 
                        onChange={handleChange} 
                    />
                    <Input 
                        name="name" 
                        placeholder="Name" 
                        value={userInfo.name} 
                        onChange={handleChange} 
                    />
                    <Input 
                        name="allergyHistory" 
                        placeholder="Allergy/Illness History" 
                        value={userInfo.allergyHistory} 
                        onChange={handleChange} 
                    />
                    <Input 
                        name="purpose" 
                        placeholder="Purpose" 
                        value={userInfo.purpose} 
                        onChange={handleChange} 
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={userInfo.description}
                        onChange={handleChange}
                    />
                </div>
                <div className="mt-4 flex justify-end gap-2">
                    <Button onClick={onSubmit}>Submit</Button>
                    <Button onClick={onClose}>Close</Button>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                    Status: {status}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default UserInfoDialog;
