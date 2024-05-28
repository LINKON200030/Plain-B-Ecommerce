import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { IoBagHandleOutline } from "react-icons/io5";
import { Separator } from "@/components/ui/separator.jsx";
import { Button } from "@/components/ui/button.jsx";

const WishList = () => {

    return (
        <div>
            <Sheet>
                <SheetTrigger><p className="mr-6 border-gray-300"><IoBagHandleOutline className="inline-block h-5 w-5" /></p></SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className="font-bold text-2xl text-green-900">WishList</SheetTitle>
                        <Separator />
                        <SheetDescription>

                        </SheetDescription>
                    </SheetHeader>

                    <SheetFooter className="fixed bottom-0 left-0 w-full p-4 ">
                        <Button   className="w-[350px]">Checkout All Items</Button>
                    </SheetFooter>

                </SheetContent>
            </Sheet>
        </div>
    );
};

export default WishList;
