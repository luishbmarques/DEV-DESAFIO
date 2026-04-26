import { Request, Response } from "express";
import prisma from "@database";

export const createCalcado = async (req: Request, res: Response) => {
    try {
        const { nome_produto, cor, marca, tamanho, preco, quantidade_em_estoque } = req.body;

        const novoCalcado = await prisma.calcado.create({
            data: {
                nome_produto,
                cor,
                marca,
                tamanho,
                preco,
                quantidade_em_estoque
            }
        });

        return res.status(201).json({
            message: "Calçado cadastrado com sucesso!",
            calcado: novoCalcado
        });

    } catch (error) {
        return res.status(400).json({
            message: "Erro ao cadastrar calçado",
            error,
        });
    }
};

export const readAllCalcados = async (req: Request, res: Response) => {
    try {
        const calcados = await prisma.calcado.findMany();

        if (calcados.length === 0) {
            return res.status(404).json({
                message: "Nenhum calçado encontrado no estoque."
            });
        }

        return res.status(200).json(calcados);

    } catch (error) {
        return res.status(400).json({
            message: "Erro ao buscar calçados",
            error,
        });
    }
};

export const updateCalcado = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const calcadoAtualizado = await prisma.calcado.update({
            where: { id: Number(id) }, 
            data: data
        });

        return res.status(200).json({
            message: "Calçado atualizado com sucesso!",
            calcado: calcadoAtualizado
        });

    } catch (error) {
        return res.status(400).json({
            message: "Erro ao atualizar calçado. Verifique se o ID existe.",
            error,
        });
    }
};

export const deleteCalcado = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        await prisma.calcado.delete({
            where: { id: Number(id) }
        });

        return res.status(200).json({
            message: "Calçado removido com sucesso do estoque."
        });

    } catch (error) {
        return res.status(400).json({
            message: "Erro ao remover calçado. Verifique se o ID existe.",
            error,
        });
    }
};