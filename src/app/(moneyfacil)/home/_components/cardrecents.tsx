import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SquareArrowDownRight, SquareArrowUpLeft, SquareArrowUpRight } from "lucide-react";


export function CardRecents(){
    return(
        <div className="p-2 flex flex-col w-full">
            <Card className="md:w-full bg-primary/20">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <h1 className="md:text-xl text-xs text-zinc-400">Transações Recentes</h1>

                        <div className="gap-4 flex items-center">
                            <Button>Filtrar</Button>
                        <Button>Nova Transação</Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                   <div className="space-y-4">
                     <Card className="p-0 px-4 py-4 bg-zinc-800">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                               <div className="size-14 flex items-center justify-center rounded-2xl bg-primary">
                                <SquareArrowUpRight className="text-zinc-200 size-8" />
                                </div> 
                                <div className="space-y-1">
                                    <h1 className="text-zinc-200">Salário</h1>
                                    <p className="text-zinc-600 text-sm">11/12/2025</p>
                                </div>
                            </div>

                            <div className="flex flex-col space-y-1">
                                <span className="flex items-center justify-center text-zinc-300 bg-red-500 px-2 rounded-2xl">Trabalho</span>
                                <h1 className="text-white">R$ 2.450.90</h1>
                            </div>
                        </div>
                     </Card>
                      <Card className="p-0 px-4 py-4 bg-zinc-800">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                               <div className="size-14 flex items-center justify-center rounded-2xl bg-primary">
                                <SquareArrowUpRight className="text-zinc-200 size-8" />
                                </div> 
                                <div className="space-y-1">
                                    <h1 className="text-zinc-200">Salário</h1>
                                    <p className="text-zinc-600 text-sm">11/12/2025</p>
                                </div>
                            </div>

                            <div className="flex flex-col space-y-1">
                                <span className="flex items-center justify-center text-zinc-300 bg-red-500 px-2 rounded-2xl">Trabalho</span>
                                <h1 className="text-white">R$ 2.450.90</h1>
                            </div>
                        </div>
                     </Card>
                      <Card className="p-0 px-4 py-4 bg-zinc-800">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                               <div className="size-14 flex items-center justify-center rounded-2xl bg-red-500">
                                <SquareArrowDownRight className="text-zinc-200 size-8" />
                                </div> 
                                <div className="space-y-1">
                                    <h1 className="text-zinc-200">Mercado</h1>
                                    <p className="text-zinc-600 text-sm">11/12/2025</p>
                                </div>
                            </div>

                            <div className="flex flex-col space-y-1">
                                <span className="flex items-center justify-center text-zinc-300 bg-red-500 px-2 rounded-2xl">Mercado</span>
                                <h1 className="text-white">- R$ 450.90</h1>
                            </div>
                        </div>
                     </Card>
                      <Card className="p-0 px-4 py-4 bg-zinc-800">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                               <div className="size-14 flex items-center justify-center rounded-2xl bg-primary">
                                <SquareArrowUpRight className="text-zinc-200 size-8" />
                                </div> 
                                <div className="space-y-1">
                                    <h1 className="text-zinc-200">Salário</h1>
                                    <p className="text-zinc-600 text-sm">11/12/2025</p>
                                </div>
                            </div>

                            <div className="flex flex-col space-y-1">
                                <span className="flex items-center justify-center text-zinc-300 bg-red-500 px-2 rounded-2xl">Trabalho</span>
                                <h1 className="text-white">R$ 2.450.90</h1>
                            </div>
                        </div>
                     </Card>
                      <Card className="p-0 px-4 py-4 bg-zinc-800">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                               <div className="size-14 flex items-center justify-center rounded-2xl bg-primary">
                                <SquareArrowUpRight className="text-zinc-200 size-8" />
                                </div> 
                                <div className="space-y-1">
                                    <h1 className="text-zinc-200">Salário</h1>
                                    <p className="text-zinc-600 text-sm">11/12/2025</p>
                                </div>
                            </div>

                            <div className="flex flex-col space-y-1">
                                <span className="flex items-center justify-center text-zinc-300 bg-red-500 px-2 rounded-2xl">Trabalho</span>
                                <h1 className="text-white">R$ 2.450.90</h1>
                            </div>
                        </div>
                     </Card>
                   </div>
                </CardContent>

            </Card>
        </div>
    )
}