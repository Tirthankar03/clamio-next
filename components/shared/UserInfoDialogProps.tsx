'use client'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { setUserInfo } from '@/utils/userInfoSlice';


interface UserInfoDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: () => void;
    userId: string; // Added userId prop
}

const UserInfoDialog: React.FC<UserInfoDialogProps> = ({ isOpen, onClose, onSubmit, userId }) => {
    const [userInfo, setUserInfoState] = useState({
        weight: '',
        height: '',
        age: '',
        name: '',
        allergyHistory: '',
        purpose: '',
        description: ''
    });

    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUserInfoState(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = () => {
        dispatch(setUserInfo({ userId, ...userInfo })); // Include userId in dispatch
        if (onSubmit) onSubmit(); // Callback to change the status
        onClose();  // Close the dialog
    };

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className='bg-white'>
                <DialogHeader>
                    <DialogTitle>User Information</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                    <Input name="weight" placeholder="Weight" value={userInfo.weight} onChange={handleChange} />
                    <Input name="height" placeholder="Height" value={userInfo.height} onChange={handleChange} />
                    <Input name="age" placeholder="Age" value={userInfo.age} onChange={handleChange} />
                    <Input name="name" placeholder="Name" value={userInfo.name} onChange={handleChange} />
                    <Input name="allergyHistory" placeholder="Allergy/Illness History" value={userInfo.allergyHistory} onChange={handleChange} />
                    <Input name="purpose" placeholder="Purpose" value={userInfo.purpose} onChange={handleChange} />
                    <textarea name="description" placeholder="Description" className="w-full p-2 border border-gray-300 rounded" value={userInfo.description} onChange={handleChange} />
                </div>
                <div className="mt-4 flex justify-end gap-2">
                    <Button onClick={handleSubmit}>Submit</Button>
                    <Button onClick={onClose}>Close</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default UserInfoDialog;
