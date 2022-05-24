import styled from "styled-components";

export const LobbyArea = styled.div`
form {
    background-color: #FFF;
    border-radius: 3px;
    padding: 10px;
    box-shadow: 0px 0px 3px #999;
    width: 600px;
    margin: auto;
    margin-top: 20px;
   
    .area {
        display: flex;
        align-items: center;
        padding: 10px;
        max-width: 500px;
    
        .area--title {
            width: 200px;
            text-align: right;
            padding-right: 20px;
            font-weight: bold;
            font-size: 14px;
        }

        .area--input{
            flex: 1;

            input {
                width: 100%;
                font-size: 14px;    
                padding: 5px;
                border: 1px solid #DDD;
                border-radius: 3px;
                outline: 0;
                transition: all ease .4s;

                &:focus {
                    border: 1px solid #333;
                    color: #333;
                }
            }
        }

        button {
            background-color: #446A46;
            border: 0;
            outline: 0;
            padding: 5px 10px;
            border-radius: 4px;
            color: #FFF;
            font-size: 15px;
            cursor: pointer;

            &:hover {
                opacity: .9;
            }
        }
                 
    }
}
`;

export const VisitArea = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    
    table {
        font-size:12px;
        box-shadow: 0px 0px 3px #999;
        border-radius: 5px;
    }

    table,
    th, 
    td {
        border: 1px solid #CCC;
    }

    th, 
    td {
        padding: 3px 4px;
    }
    tr:hover {
        background-color: #D8E9A8;
    }
`;