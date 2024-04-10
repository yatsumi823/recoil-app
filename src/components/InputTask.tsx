import { addTitleState, addTitleStateLerngth } from '@/recoil/state/addTitleState'
import { inputTitleState } from '@/recoil/state/inputTitleState'
import { Button, Input, getKeyValue } from '@nextui-org/react'
import React, { useCallback } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

export default function InputTask() {

    const [inputTitle, setInputTitle] = useRecoilState(inputTitleState)
    const [addTitle, setAddTitle] = useRecoilState(addTitleState);
    const addTitleLength = useRecoilValue(addTitleStateLerngth);

    function getKeyValue(){
        return Math.random().toString(32).substring(2);
    }

    function addTaskClick(){
        setAddTitle([...addTitle, {id: getKeyValue(), title:inputTitle}])
        setInputTitle("");
    }


    const inputTaskOnChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setInputTitle(e.target.value);
        },
        [inputTitle]
    )

  return (
    <>
        <div>
            <div className='flex'>
                <Input className='flex-initial w-64 m-1' type='text' value={inputTitle} onChange={inputTaskOnChange} placeholder="タスク" />
                <Button className='flex-initial w-32 m-1' color="primary" variant="solid" onClick={() => addTaskClick()}>追加</Button>
            </div>
            <div className='text-center mt-2'>{addTitleLength}個のタスクがあります</div>
        </div>
    </>
  )
}
